import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  model!: string;

  constructor() { }

  receberPedido(valor:string) {
    this.model = valor;
  }

  ngOnInit(): void {
  }

}
