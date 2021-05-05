import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

import { FooterComponent } from './footer/footer.component';
import { WhoMadeThisWebsiteComponent } from './who-made-this-website/who-made-this-website.component';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ThanhGuongComponent } from './thanh-guong/thanh-guong.component';
import { HomeComponent } from './home/home.component';
import { Item1Component } from './item1/item1.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarButtonComponent,
    FooterComponent,
    WhoMadeThisWebsiteComponent,
    ThanhGuongComponent,
    HomeComponent,
    Item1Component,
    Item2Component,
    Item3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
