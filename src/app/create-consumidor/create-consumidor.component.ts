import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-consumidor',
  templateUrl: './create-consumidor.component.html',
  styleUrls: ['./create-consumidor.component.css']
})
export class CreateConsumidorComponent implements OnInit {
  nombre:String="";
  apellido:String="";
  email:String="";

  constructor() { }

  ngOnInit(){
  }
  onSubmit() {

  }
}
