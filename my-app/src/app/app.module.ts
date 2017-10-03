import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './item-list/item-list.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { FormComponent } from './form/form.component';
import { FilterPipe } from './filter.pipe';
import { StateDirective } from './state.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemListComponent,
    ModalComponent,
    FormComponent,
    FilterPipe,
    StateDirective // Import de composant pour pouvoir l'utiliser dans ce composant
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // Import de module
    NgbModule.forRoot()
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
