import { Component, ElementRef} from '@angular/core';
import {CommonModule, } from '@angular/common';
import {Renderer2} from "@angular/core";
import {User} from "../user";
import {FormsModule} from "@angular/forms";
import {SliderComponent} from "../slider/slider.component";
import {NgClass} from "@angular/common"

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [CommonModule, FormsModule, SliderComponent, NgClass],
  templateUrl: './my-page.component.html',
  styleUrls: ['./my-page.component.css']
})
export class MyPageComponent {

  visibleField:boolean=true


  visibleFieldFunction(){
    this.visibleField = false
  }
  notVisibleFieldFunction(){
    let field = this.elementRef.nativeElement.querySelector('.visible')
    this.visibleField=true
    if (field.value.trim() != '') {
      this.User.name = field.value;
    }
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  User:User={
    name:"Denis Stokin",
    age: 20,
  }

}
