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
    let  i = document.getElementById('text')
    setTimeout(()=>{
      if(i){
        i.style.opacity = "0.85"
      }
    },2600)
  }


}
