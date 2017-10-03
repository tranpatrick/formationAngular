import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: any;

  ngOnInit(): void {
    this.collection = [
      {reference: '1234', name: 'Marina', state: 0},
      {reference: '2345', name: 'Patrick', state: 1},
      {reference: '3456', name: 'Quentin', state: 2}
    ];
  }

}
