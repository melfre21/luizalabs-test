import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ClienteComponent } from './cliente.component';
import { ListComponent } from './list/list.component';

const clienteRoutes: Routes = [
  { path: '' , component : ClienteComponent, children: [
    { path: '' , component : ListComponent },
    { path: 'list' , component : ListComponent },
    { path: 'add' , component : AddComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(clienteRoutes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
