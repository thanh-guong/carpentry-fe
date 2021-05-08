import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input()
  public name: string | undefined;

  @Input()
  public image: string | undefined;

  @Input()
  public id: number | undefined;

  public imageLoaded: boolean | undefined;

  constructor() { }

  ngOnInit(): void { }

  getArticlePath(): string
  {
    return '/' + environment.articlesRoute + '/' + this.id;
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }

}
