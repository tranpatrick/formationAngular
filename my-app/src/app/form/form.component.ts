import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Item } from '../item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() add: EventEmitter<Item> = new EventEmitter;
  form: FormGroup;
  nameCtrl: FormControl;
  refCtrl: FormControl;
  stateCtrl: FormControl;

  constructor (fb: FormBuilder, private modalService: NgbModal) {
    this.nameCtrl = fb.control('', [Validators.required, Validators.minLength(2)]);
    this.refCtrl = fb.control('', [Validators.required, Validators.minLength(4),]);
    this.stateCtrl = fb.control(0); // Met la valeur d'index 0 par défaut
    this.form = fb.group({
      name: this.nameCtrl,
      ref: this.refCtrl,
      state: this.stateCtrl
    });
  }

  ngOnInit() {
  }

  // Reset le formulaire
  reset() {
    this.form.reset();
    this.stateCtrl.setValue(0);
  }

  isValid(champ: string) {
    return this.form.get(champ).dirty && this.form.get(champ).hasError('minlength');
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.msg = 'Votre commande a bien été ajoutée';
  }

  addItem() {
    this.add.emit({
      name: this.form.get('name').value,
      reference: this.form.get('ref').value,
      state: this.form.get('state').value
    });
    this.open();
    this.reset();
  }

}
