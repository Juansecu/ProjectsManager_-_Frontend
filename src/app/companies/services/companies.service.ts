import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ICompany } from '../typings/Company';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  private readonly _BASE_URL = environment.serverUri;

  constructor(private readonly _HTTP_CLIENT: HttpClient) {}

  getCompanies(): Observable<ICompany[]> {
    return this._HTTP_CLIENT.get<ICompany[]>(`${this._BASE_URL}/companies`);
  }
}
