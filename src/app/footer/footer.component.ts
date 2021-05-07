import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  articles = environment.articlesRoute;
  works = environment.worksRoute;
  contactUs = environment.contactUsRoute;
  whoMadeThisWebsiteRoute = environment.whoMadeThisWebsiteRoute;

}
