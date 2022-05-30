import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../types/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // http sẽ cung cấp các phương thức để tương tác với APi
  constructor(private http: HttpClient) { }
  //Observable sẽ cung cấp kiểu xử lý bất đồng bộ để phía component lắng nghe dữ liệu
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.products)
  }
}
