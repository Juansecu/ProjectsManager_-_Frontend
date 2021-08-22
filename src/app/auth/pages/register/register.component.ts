import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMessage = '';
  form = this._FORM_BUILDER.group({
    email: [
      '',
      [
        Validators.maxLength(45),
        Validators.pattern(
          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ),
        Validators.required
      ]
    ],
    firstName: [
      '',
      [Validators.pattern(/^[a-zA-Z]{2,20}$/), Validators.required]
    ],
    lastName: [
      '',
      [Validators.pattern(/^[a-zA-Z]{3,20}$/), Validators.required]
    ],
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

  register() {
    this._AUTH_SERVICE.register(this.form.value).subscribe(response => {
      if ((response as any).code !== 201) {
        this.form.reset();
        this.errorMessage =
          'Ha habido un error al inetntar añadir su usuario. ¡Inténtelo más tarde!';
        return;
      }

      this._ROUTER.navigate(['/auth/login']);
    });
  }
}
