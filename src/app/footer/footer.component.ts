import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  item1Route = environment.item1Route;
  item2Route = environment.item2Route;
  item3Route = environment.item3Route;
  whoMadeThisWebsiteRoute = environment.whoMadeThisWebsiteRoute;

}
