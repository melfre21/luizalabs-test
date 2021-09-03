import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { Cliente, ResponseCliente } from 'src/app/models/cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cliente!: Cliente[];
  clientes: Array<any> = new Array();

  constructor(
    private _service: ClienteService
  ){ }

  ngOnInit(): void {
    this.getAllCliente();
  }

  getAllCliente(){
    this._service.findAll()
      .pipe(first())
      .subscribe((response: any) => {
        console.log(response);
        this.clientes =  response.data
      });
  }

}
