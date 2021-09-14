import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './components/company-list/company-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CompanyListComponent
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
