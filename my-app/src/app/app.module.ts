import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemListComponent // Import de composant pour pouvoir l'utiliser dans ce composant
  ],
  imports: [
    BrowserModule,
    FormsModule // Import de module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
