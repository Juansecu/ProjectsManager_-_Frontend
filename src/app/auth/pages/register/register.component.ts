import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
    private readonly _AUTH_SERVICE: AuthService
  ) {}

  register() {}
}
