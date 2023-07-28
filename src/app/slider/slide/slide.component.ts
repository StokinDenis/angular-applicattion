import { Component } from '@angular/core';
import {Input} from "@angular/core";



@Component({
  selector: 'app-slide',
  standalone: true,
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
})
export class SlideComponent {
 @Input() slide!:string
}
