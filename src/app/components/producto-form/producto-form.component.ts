import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/entity/categoria';
import { Producto } from 'src/app/entity/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  producto: Producto = new Producto();
  categoria: Categoria[]=[];

  constructor(private productoService:ProductoService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router){ }

  ngOnInit(): void {
    this.productoService.getCategorias()
    .subscribe(response => this.categoria = response);

    this.activatedRoute.params
    .subscribe(params =>{
        let id : number = params['id'];
        if(id){
          this.productoService.obtenerProducto(id)
              .subscribe(response => this.producto = response)
        }
      }
      )

  }

  crearProducto(){
    console.log(this.producto);
    this.productoService.creaProducto(this.producto)
    .subscribe(response => this.router.navigate(['']))
  }

  actualizarProducto(){
    this.productoService.actualizarProducto(this.producto)
    .subscribe(response => this.router.navigate(['']));
  }



}
