import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { NegateAuthGuard } from './auth/guards/negate-auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [NegateAuthGuard],
    canLoad: [NegateAuthGuard]
  },
  {
    path: 'companies',
    loadChildren: () =>
      import('./companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./tickets/tickets.module').then(m => m.TicketsModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'projects'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
