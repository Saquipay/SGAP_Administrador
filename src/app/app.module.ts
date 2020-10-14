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
<<<<<<< HEAD
    CabeceraComponent,
    CreateConsumidorComponent,
    FooterComponent,
    CreatemedidorComponent
=======
    CreateConsumidorComponent
>>>>>>> 7856839d4ad1d522ee269ba1d1d5f7fb3ea2d285
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
