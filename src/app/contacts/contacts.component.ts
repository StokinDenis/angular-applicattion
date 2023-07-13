import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact/contact.component";
import {Contact} from "../contact";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, ContactComponent],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
   contacts:Contact[]=[
     {name: 'Denis Stokin', age: 20, occupation: 'Frontend developer'},
     {name: 'Alexey Sholohov', age: 20, occupation: 'Frontend developer'},
     {name: 'Nikolay Spravtcev', age: 20, occupation: 'Frontend developer'},
     {name: 'Nikolay Klimovich', age: 20, occupation: 'Backend developer'},
     {name: 'Denis', age: 20, occupation: 'Frontend developer'},
   ]

}
