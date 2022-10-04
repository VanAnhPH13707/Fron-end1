import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
  products: Product[];
 
  constructor(private productService: ProductService) { 
    this.products = [];
    
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    //với kiểu dữ liệu trả về là observable thì có phương thức subsribe để lắng nghe
    // bao giờ có kết quả sẽ trả về qua tham số và thực thi tiếp
    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
    })
  }
  onDelete(_id:number){
    const confirm = window.confirm("Bạn chắc chắn muốn xóa ?")
    if (confirm && _id) {
      this.productService.deleteProduct(_id).subscribe((data) =>{
        console.log(data);
        this.onGetList();
        
      })
    }
  }
  
}
