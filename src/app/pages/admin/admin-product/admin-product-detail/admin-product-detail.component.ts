import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { Product, ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  _id: string;
  product: Product;
  cartValue: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private lsService: LocalStorageService
  ) {
    this._id = '';
    this.product = {
      _id: 0,
      name: ''
    };
    this.cartValue = 1;
   }

  ngOnInit(): void {
    this._id = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(this._id).subscribe((data) =>{
      this.product = data;
      console.log(data);
      
    });
  }
  onChangeCartValue(event:any){
    this.cartValue = event.target.value;
  }
  onAddToCart(){
    const addItem = {
      ...this.product,
      value: +this.cartValue
    };

    this.lsService.setItem(addItem);
    this.cartValue = 1;
  }


}
