import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { AddUser } from '../typings/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _BASE_URI = environment.serverUri;

  constructor(private readonly _HTTP_CLIENT: HttpClient) {}

  register(newUserData: AddUser) {
    return this._HTTP_CLIENT.post(
      `${this._BASE_URI}/users/register`,
      newUserData
    );
  }
}
