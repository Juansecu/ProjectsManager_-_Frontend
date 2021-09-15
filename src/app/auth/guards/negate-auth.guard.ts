import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class NegateAuthGuard implements CanActivate, CanLoad {
  constructor(private readonly _AUTH_GUARD: AuthGuard) {}

  canActivate(): boolean {
    return !this._AUTH_GUARD.canActivate();
  }
  canLoad(): boolean {
    return !this._AUTH_GUARD.canLoad();
  }
}
