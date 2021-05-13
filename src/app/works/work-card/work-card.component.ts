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

  @Input()
  public description: string | undefined;

  @Input()
  public hideButton: boolean | undefined = false;

  descLimit: number = 100;

  public imageLoaded: boolean | undefined;

  constructor() { }

  ngOnInit(): void { }

  getWorkPath(): string
  {
    return '/' + environment.worksRoute + '/' + this.id;
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }

}
