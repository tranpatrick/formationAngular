import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor (fb: FormBuilder) {
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.refCtrl = fb.control('', [Validators.required, Validators.minLength(4),]);
    this.stateCtrl = fb.control(0); // Met la valeur d'index 0 par défaut
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit(): void {
    this.collection = [
      new Item({reference: '1234', name: 'Marina', state: 0}),
      new Item({reference: '2345', name: 'Patrick', state: 1}),
      new Item({reference: '3456', name: 'Quentin', state: 2})
    ];
  }

  addItem() {
    this.collection.push({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value, // permet d'envoyer la valeur ref même si le tableau attend un objet avec "reference"
      state: this.form.get('state').value
    });
    this.reset();
  }

  // Reset le formulaire
  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isValid(champ: string) {
    return this.form.get(champ).dirty && this.form.get(champ).hasError('minlength');
  }

}
