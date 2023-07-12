import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewsComponent} from "./news/news.component";
import {MyPageComponent} from "./my-page/my-page.component";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsComponent,
    MyPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
