import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {collection, addDoc, Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-rsvp',
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css']
})
export class RsvpComponent {
  rsvpForm: FormGroup;
  firestore = inject(Firestore)
  constructor(private fb: FormBuilder) {
    this.rsvpForm = this.fb.group({
      name: ['', Validators.required],
      attend: [false, Validators.required]
    });
  }
  fireCollection =  collection(this.firestore,'wedding')

  onSubmit() {
    if (this.rsvpForm.valid) {
      const rsvpData = this.rsvpForm.value;
      addDoc(
        this.fireCollection,rsvpData
      ).then(() => {
        alert('Жауабыңызға рақмет!');
        this.rsvpForm.reset();
      }).catch((error) => {
        console.error('Ошибка при добавлении данных:', error);
        alert('Қайтадан теріп көріңіз!');
      });
    }
  }
}
