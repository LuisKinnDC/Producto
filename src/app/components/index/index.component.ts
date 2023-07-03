import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/entity/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos()
    .subscribe(response => this.productos = response);

  }

}
