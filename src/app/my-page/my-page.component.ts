import { Component, ElementRef} from '@angular/core';
import {CommonModule, } from '@angular/common';
import {ContentComponent} from "../content/content.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {Renderer2} from "@angular/core";

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, ContentComponent, FooterComponent, HeaderComponent,],
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {


  appearanceField(){
    let field = this.elementRef.nativeElement.querySelector('.input_name_redactor')
    this.renderer.setStyle(field, 'opacity','1')
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


}
