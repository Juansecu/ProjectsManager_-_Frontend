import { Component, OnInit } from '@angular/core';

import { ICompany } from '../../typings/Company';

import { CompaniesService } from '../../services/companies.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss']
})
export class CompaniesListComponent implements OnInit {
  companies: ICompany[] = [];

  constructor(private readonly _COMPANIES_SERVICE: CompaniesService) {}

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this._COMPANIES_SERVICE
      .getCompanies()
      .subscribe(companies => (this.companies = companies));
  }
}
