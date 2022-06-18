import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductCart } from 'src/app/types/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: ProductCart[];
  cartItemValues: number = 0;
  cartTotal: number = 0
  constructor(private lsService: LocalStorageService) {
    this.cartItems = [];
  }

  ngOnInit(): void {
    this.onSetCart();
    // Khi setItem được chạy, thì next('') cũng được chạy -> có thể subscribe được
    this.lsService.watchStorage().subscribe(data => {
      this.onSetCart();
    })
  }
  onRemove(_id:number){
    this.lsService.removeItem(_id)
    this.onSetCart()
    this.cartItems = this.lsService.getItem();
    this.cartItemValues = this.cartItems.reduce((a, b) => a + b.value, 0);
    for(let i = 0; i < this.cartItems.length ; i++){
      this.cartTotal += (this.cartItems[i].price - this.cartItems[i].price*this.cartItems[i].sale_price/100) * this.cartItems[i].value
    }
  }
  onSetCart() {
    this.cartItems = this.lsService.getItem();
    // this.cartItemValues = 0;
    // this.cartItems.forEach(item => {
    //   this.cartItemValues += item.value;
    // })
    this.cartItemValues = this.cartItems.reduce((a, b) => a + b.value, 0);

    for(let i = 0; i < this.cartItems.length ; i++){
      this.cartTotal += (this.cartItems[i].price - this.cartItems[i].price*this.cartItems[i].sale_price/100) * this.cartItems[i].value
    }
  }
}
