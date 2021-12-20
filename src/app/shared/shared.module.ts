import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogoReinicioComponent } from './dialogo-reinicio/dialogo-reinicio.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    DialogoReinicioComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
