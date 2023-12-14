import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  phoneNumber = '+7(771) 224 31-18';
  email = 'info@oneway.kz';
  contactAvailability = 'с 10:00 до 21:00';
  instagramLink = 'https://www.instagram.com/onewaykz/';
}
