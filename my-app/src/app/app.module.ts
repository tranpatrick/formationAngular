import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.prod';
import { ItemModuleModule } from './item-module/item-module.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ModalComponent,
    NotFoundComponent,
    HomeComponent, // Import de composant pour pouvoir l'utiliser dans ce composant
  ],
  imports: [
    BrowserModule, // Import de module
    NgbModule.forRoot(),
    AppRoutingModule,
    ItemModuleModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
