import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../entity/producto';
import { Categoria } from '../entity/categoria';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url : string = 'http://localhost:8080/api/productos'

  constructor(private http : HttpClient) { }

  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url +'/listar');
  }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url +'/categorias');
  }

  creaProducto(producto:Producto): Observable<Producto>{
    return this.http.post<Producto>(this.url +'/crear',producto);
  }

  obtenerProducto(id: number): Observable<Producto>{
    return this.http.get<Producto>(this.url+ '/'+id);
  }

  actualizarProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(this.url + '/actualizar/'+ producto.id, producto);
  }

  eliminarProducto(id: number): Observable<any>{
    return this.http.delete<any>(this.url +'/eliminar/'+id)
  }

}
