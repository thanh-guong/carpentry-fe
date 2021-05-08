import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-work-card',
  templateUrl: './work-card.component.html',
  styleUrls: ['./work-card.component.css']
})
export class WorkCardComponent implements OnInit {

  @Input()
  public name: string | undefined;

  @Input()
  public image: string | undefined;

  @Input()
  public id: number | undefined;

  public imageLoaded: boolean | undefined;

  constructor() { }

  ngOnInit(): void { }

  getWorkPath(): string
  {
    return '/' + environment.articlesRoute + '/' + this.id;
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }

}
