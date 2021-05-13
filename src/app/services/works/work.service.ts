import { Injectable } from '@angular/core';
import { SuperService } from "../super.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

export interface IWorkImage
{
  id: number;
  image: string;
}

export interface IWork
{
  id: number;
  title: string;
  description: string;
  front_image: string;
  images: IWorkImage[];
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

  public getWorkById(id: number | undefined): Observable<IWork>
  {
    return this.http.get<IWork>(this.generateRemoteAddressForApi(environment.worksRemote) + '/' + id);
  }
}
