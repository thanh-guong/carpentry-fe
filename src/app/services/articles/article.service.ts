import { Injectable } from '@angular/core';
import { SuperService } from "../super.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

export interface IArticle
{
  id: number;
  title: string;
  description: string;
  image: string;
  last_update: Date
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends SuperService
{
  public getAllArticles(): Observable<IArticle[]>
  {
    return this.http.get<IArticle[]>(this.generateRemoteAddressForApi(environment.articlesRemote));
  }
}
