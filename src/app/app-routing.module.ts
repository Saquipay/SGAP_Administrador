import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateConsumidorComponent } from './create-consumidor/create-consumidor.component';

const routes: Routes = [
  { path: 'createconsumidor', component: CreateConsumidorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
