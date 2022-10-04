import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-product-detail-client',
  templateUrl: './product-detail-client.component.html',
  styleUrls: ['./product-detail-client.component.css']
})
export class ProductDetailClientComponent implements OnInit {
  _id: string;
  product: Product;
  cartValue: number;
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private lsService: LocalStorageService
  ) {
    // định nghĩa dữ liệu mặc định
    this._id = "";
    this.product = {
      _id: 0,
      author: '',
      name: '',
      price: 0,
      image:'',
      desc: '',
      sale_price: 0,
      category: '',
      status: 0
      

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
