import { Injectable } from '@angular/core';
import { SuperService } from "../super.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

export interface IWork
{
  id: number;
  title: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkService extends SuperService
{
  public getAllWorks(): Observable<IWork[]>
  {
    return this.http.get<IWork[]>(this.generateRemoteAddressForApi(environment.worksRemote));
  }
}
