import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaCartaService {

  imagenes: String[] = [];
  constructor(private http: HttpClient) { }

  mostrarImagenes(busqueda:String){
    this.http.get(`https://unsplash.com/s/photos/${busqueda}`)
    .subscribe((resp) => {
      
    }
    )
  }

}
