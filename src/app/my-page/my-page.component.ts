import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentComponent} from "../content/content.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, ContentComponent, FooterComponent, HeaderComponent],
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {

}
