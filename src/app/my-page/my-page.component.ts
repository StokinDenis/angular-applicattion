import { Component, ElementRef} from '@angular/core';
import {CommonModule, } from '@angular/common';
import {ContentComponent} from "../content/content.component";
import {FooterComponent} from "../footer/footer.component";
import {HeaderComponent} from "../header/header.component";
import {Renderer2} from "@angular/core";
import {User} from "../user";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, ContentComponent, FooterComponent, HeaderComponent, FormsModule,],
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {


  appearanceField(){
    let field = this.elementRef.nativeElement.querySelector('.input_name_redactor')
    let buttonChange = this.elementRef.nativeElement.querySelector('.button_change')
    this.renderer.setStyle(field, 'opacity','1')
    this.renderer.setStyle(buttonChange, 'opacity', '1')
  }

  fieldHiding(){
    let buttonChange = this.elementRef.nativeElement.querySelector('.button_change')
    this.renderer.setStyle(buttonChange, 'opacity' , '0')
    let field = this.elementRef.nativeElement.querySelector('.input_name_redactor')
    this.renderer.setStyle(field, 'opacity' , '0')
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  User:User={name:"Denis Stokin"}

}
