import { Component, OnInit } from '@angular/core';
import {ArticleService, IArticle} from "../services/articles/article.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: IArticle[] | undefined;
  loading: boolean = false;

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void
  {
    this.loading = true;

    this.articleService.getAllArticles().subscribe(
      data => {
        this.articles = data;
        this.loading = false;
      },
      error => {
        if (!environment.production)
        {
          console.log(error);
        }

        this.loading = false;
      });
  }

}
