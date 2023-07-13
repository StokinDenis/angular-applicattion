import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Contact} from "../../contact";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact!:Contact;
}
