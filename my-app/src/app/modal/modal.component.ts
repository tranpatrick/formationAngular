import { Component, OnDestroy, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnDestroy {

  @Input() msg;

  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnDestroy() {
    this.router.navigate(['list']);
  }

}
