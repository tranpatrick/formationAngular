import { Component, OnInit } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];

  constructor () {}

  ngOnInit(): void {
    this.collection = [
      new Item({reference: '1234', name: 'Marina', state: 0}),
      new Item({reference: '2345', name: 'Patrick', state: 1}),
      new Item({reference: '3456', name: 'Quentin', state: 2})
    ];
  }

  addItem(item: Item) {
    this.collection.push(item);
  }

}
