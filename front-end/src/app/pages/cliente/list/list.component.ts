import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  // @Output() pedido = new EventEmitter();

  ngOnInit(): void {
    // this.pedido.emit('R$100,00');
  }

}
