import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormComponent } from '../item-module/form/form.component';
import { ItemListComponent } from '../item-module/item-list/item-list.component';

const itemsRoutes: Routes = [
  { path: 'list', component: ItemListComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      itemsRoutes
    )
  ],
  declarations: []
})
export class ItemRoutingModule { }
