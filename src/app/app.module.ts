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
import { HttpClientModule } from '@angular/common/http';

import { FooterComponent } from './footer/footer.component';
import { WhoMadeThisWebsiteComponent } from './who-made-this-website/who-made-this-website.component';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ThanhGuongComponent } from './thanh-guong/thanh-guong.component';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { WorksComponent } from './works/works.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ArticleCardComponent } from './articles/article-card/article-card.component';
import { WorkCardComponent } from './works/work-card/work-card.component';
import { WorkDetailComponent } from './works/work-detail/work-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarButtonComponent,
    FooterComponent,
    WhoMadeThisWebsiteComponent,
    ThanhGuongComponent,
    HomeComponent,
    ArticlesComponent,
    WorksComponent,
    ContactUsComponent,
    ArticleCardComponent,
    WorkCardComponent,
    WorkDetailComponent
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
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
