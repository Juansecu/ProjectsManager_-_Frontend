import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesListComponent } from './components/companies-list/companies-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CompaniesListComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule {}
