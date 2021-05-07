import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(protected http: HttpClient) { }

  protected generateRemoteAddressForApi(api: string): string
  {
    return 'http://' + environment.remoteHost + ':' + environment.remotePort + '/' + environment.remoteApiPrefix + '/' + api;
  }
}
