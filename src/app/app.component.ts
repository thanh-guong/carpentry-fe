import { Component } from '@angular/core';
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carpentry';

  public item1 =
    {
      name: 'item1',
      icon: 'build',
      route: environment.item1Route,
    };

  public item2 =
    {
      name: 'item2',
      icon: 'build',
      route: environment.item2Route,
    };

  public item3 =
    {
      name: 'item3',
      icon: 'build',
      route: environment.item3Route,
    };
}
