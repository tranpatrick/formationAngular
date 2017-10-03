import { AppComponent } from '../app.component';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  collection: Item[];

  constructor(private _AppComponent: AppComponent) { } // injection de l'app component

  ngOnInit() {
    this.collection = this._AppComponent.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }

}
