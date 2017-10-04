import { Injectable } from '@angular/core';
import { Item } from './item';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class CollectionService {

  collection: any[];

  constructor(private db: AngularFireDatabase) {
    this.db.list('/collection').valueChanges().subscribe((data) => {
      this.collection = data;
    });
   }

  addItem(item: any) {
    this.db.list('/collection').push(item);
  }

}
