import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConsumidorComponent } from './create-consumidor/create-consumidor.component';
import { CreatemedidorComponent } from './createmedidor/createmedidor.component';

const routes: Routes = [
  { path: 'createconsumidor', component: CreateConsumidorComponent },
  { path: 'createmedidor', component: CreatemedidorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
