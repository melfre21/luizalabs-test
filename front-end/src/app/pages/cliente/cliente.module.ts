import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ClienteComponent } from './cliente.component';
import { MaterialModule } from 'src/app/shared/material.module';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ClienteRoutingModule
  ],
  exports: [
    ListComponent,
    AddComponent,
    ClienteComponent
  ]
})
export class ClienteModule { }
