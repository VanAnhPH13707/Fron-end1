import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import { Category } from '../types/Category';
import { Product } from '../types/Product';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})
export class HomeClientComponent implements OnInit {
  _id:string;
  products: Product[];
  category: Category[]
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router
    ) {
      this.category = [];
      this.products = [];
      this._id = '';
     }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  onListCate(_id:string){
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  onSelect(_id: string){
    this.onListCate(_id);
    this.router.navigateByUrl(`/products/${_id}`)
  }

}
