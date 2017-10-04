import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { CollectionService } from '../collection.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  collection: Item[];

  constructor(private _CollectionService: CollectionService) { } // injection du service CollectionService

  ngOnInit() {
    this.collection = this._CollectionService.collection;
  }

  changeState(item: Item, state: number) {
    item.state = state;
  }

}
