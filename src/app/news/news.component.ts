import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {ContentComponent} from "../content/content.component";

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ContentComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {

}
