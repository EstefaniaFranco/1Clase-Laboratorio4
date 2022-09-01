import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public edadUno:number = 0;
  public edadDos:number = 0;
  public suma:number = 0;
  public promedio:number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  calcular() {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma/2;
  }

  limpiar(){
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
