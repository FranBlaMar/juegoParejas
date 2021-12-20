import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaJuegoComponent } from './carta-juego/carta-juego.component';



@NgModule({
  declarations: [
    CartaJuegoComponent
  ],
  exports: [
    CartaJuegoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartaModule { }
