import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ResponseCliente } from 'src/app/models/cliente.model';
import { CrudService } from 'src/app/shared/crud.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends CrudService<Cliente, number> {

  constructor(protected _http: HttpClient) {
    super(_http, `${environment.apiUrl}/clientes`);
  }


}
