import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errorMessage = '';
  form = this._FORM_BUILDER.group({
    password: [
      '',
      [Validators.maxLength(16), Validators.minLength(8), Validators.required]
    ],
    username: [
      '',
      [Validators.pattern(/^[a-zA-Z0-9]{8,15}$/), Validators.required]
    ]
  });

  constructor(
    private readonly _FORM_BUILDER: FormBuilder,
    private readonly _ROUTER: Router,
    private readonly _AUTH_SERVICE: AuthService
  ) {}

  login(): void {
    this._AUTH_SERVICE.login(this.form.value).subscribe(response => {
      if ((response as any).code !== 200) {
        switch ((response as any).code) {
          case 401:
            this.errorMessage = `¡La contraseña insertada es incorrecta!`;
            break;
          case 404:
            this.errorMessage = `¡El usuario ${this.form.value.username} no existe!`;
            break;
          default:
            this.errorMessage =
              'Ha habido un error al inetntar iniciar sesión en su usuario. ¡Inténtelo más tarde!';
        }

        return;
      }

      localStorage.setItem('token', (response as any).token);

      this._ROUTER
        .navigate(['/companies'])
        .then(() => window.location.reload());
    });
  }
}
