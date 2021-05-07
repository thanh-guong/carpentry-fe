import { Component } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carpentry';

  public articles =
    {
      name: 'News',
      icon: 'article',
      route: environment.articlesRoute,
    };

  public works =
    {
      name: 'Lavori',
      icon: 'build',
      route: environment.worksRoute,
    };

  public contactUs =
    {
      name: 'Contattami',
      icon: 'email',
      route: environment.contactUsRoute,
    };
}
