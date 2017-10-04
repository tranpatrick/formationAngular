import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from '../item-list/item-list.component';
import { FormComponent } from '../form/form.component';


const appRoutes: Routes = [
  { path: 'list', component: ItemListComponent },
  { path: 'form', component: FormComponent },
  { path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
