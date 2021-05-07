import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {environment} from "../environments/environment";
import {WhoMadeThisWebsiteComponent} from "./who-made-this-website/who-made-this-website.component";
import {ThanhGuongComponent} from "./thanh-guong/thanh-guong.component";
import {HomeComponent} from "./home/home.component";
import {ArticlesComponent} from "./articles/articles.component";
import {WorksComponent} from "./works/works.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: environment.whoMadeThisWebsiteRoute, component: WhoMadeThisWebsiteComponent},
  {path: environment.thanhGuongRoute, component: ThanhGuongComponent},
  {path: environment.articlesRoute, component: ArticlesComponent},
  {path: environment.worksRoute, component: WorksComponent},
  {path: environment.contactUsRoute, component: ContactUsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
