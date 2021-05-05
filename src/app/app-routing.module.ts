import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {environment} from "../environments/environment";
import {WhoMadeThisWebsiteComponent} from "./who-made-this-website/who-made-this-website.component";
import {ThanhGuongComponent} from "./thanh-guong/thanh-guong.component";
import {HomeComponent} from "./home/home.component";
import {Item1Component} from "./item1/item1.component";
import {Item2Component} from "./item2/item2.component";
import {Item3Component} from "./item3/item3.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: environment.whoMadeThisWebsiteRoute, component: WhoMadeThisWebsiteComponent},
  {path: environment.thanhGuongRoute, component: ThanhGuongComponent},
  {path: environment.item1Route, component: Item1Component},
  {path: environment.item2Route, component: Item2Component},
  {path: environment.item3Route, component: Item3Component},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
