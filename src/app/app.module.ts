import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CreateConsumidorComponent } from './create-consumidor/create-consumidor.component';
import { FooterComponent } from './footer/footer.component';
import { CreatemedidorComponent } from './createmedidor/createmedidor.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateConsumidorComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
