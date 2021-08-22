import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { IProject } from '../typings/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private readonly _BASE_Url = environment.serverUri;

  constructor(private readonly _HTTP_CLIENT: HttpClient) {}

  getProjects(): Observable<IProject[]> {
    return this._HTTP_CLIENT.get<IProject[]>(`${this._BASE_Url}/projects`);
  }
}
