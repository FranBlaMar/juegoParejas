import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaJuegoComponent } from './carta-juego/carta-juego.component';
import { BusquedaCartaComponent } from './busqueda-carta/busqueda-carta.component';
import { ResultadosBusquedaComponent } from './resultados-busqueda/resultados-busqueda.component';



@NgModule({
  declarations: [
    CartaJuegoComponent,
    BusquedaCartaComponent,
    ResultadosBusquedaComponent
  ],
  exports: [
    CartaJuegoComponent,
    BusquedaCartaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartaModule { }
