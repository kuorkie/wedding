import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RsvpComponent} from '../rsvp/rsvp.component';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule,RsvpComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  isMobile:boolean = window.innerWidth < 768
  constructor() {

  }
  ngOnInit() {

  }


}
