import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RsvpComponent} from '../rsvp/rsvp.component';
import {MusicPlayerComponent} from '../music-player/music-player.component';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule,RsvpComponent,MusicPlayerComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  isMobile:boolean = window.innerWidth < 768
  constructor() {
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
    });

  }
  ngOnInit() {

  }


}
