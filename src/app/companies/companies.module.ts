import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';

import { CompanyListComponent } from './components/company-list/company-list.component';

@NgModule({
  declarations: [CompanyListComponent],
  imports: [CommonModule, CompaniesRoutingModule]
})
export class CompaniesModule {}
