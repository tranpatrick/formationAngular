import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  collection: any;

  constructor(private _AppComponent: AppComponent) { } // injection de l'app component

  ngOnInit() {
    this.collection = this._AppComponent.collection;
  }

}
