import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductCreate } from '../types/Product';

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
  // getProductFilter(_id:string): Observable<Product[]>{
  //   return this.http.get<Product[]>(`${environment.products}/${_id}`)
  // }
  getProduct(_id:string): Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${_id}`);
  }
  deleteProduct(_id: string|number): Observable<any>{
    return this.http.delete(`${environment.products}/${_id}`);
  }
  createProduct(data: ProductCreate): Observable<Product>{
    return this.http.post<Product>(`${environment.products}`, data)
  }
  updateProduct(_id: string|number, data: ProductCreate): Observable<Product>{
    return this.http.put<Product>(`${environment.products}/${_id}`, data);
  }
}
