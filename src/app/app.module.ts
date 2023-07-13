import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NewsComponent} from "./news/news.component";
import {MyPageComponent} from "./my-page/my-page.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NewsComponent,
    MyPageComponent,
    FooterComponent,
    HeaderComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
