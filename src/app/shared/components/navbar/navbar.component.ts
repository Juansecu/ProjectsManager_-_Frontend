import { Component, OnInit } from '@angular/core';

import { Route } from '../../typings/Route';

import { routesConstant } from '../../constants/routes.constant';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes: Route[] = routesConstant;

  constructor(private readonly _AUTH_SERVICE: AuthService) {}

  ngOnInit(): void {
    if (!this._AUTH_SERVICE.verifyToken()) {
      this.routes.push({
        label: 'Login',
        path: '/auth/login'
      });
      this.routes.push({
        label: 'Register',
        path: '/auth/register'
      });
    } else {
      this.routes.push({
        label: 'Tickets',
        path: '/tickets'
      });
    }
  }
}
