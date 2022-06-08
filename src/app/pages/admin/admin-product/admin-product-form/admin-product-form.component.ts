import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string
  constructor(
    private productService: ProductService, // cung cấp createProduct
    private router: Router ,// cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('',[ 
        Validators.required, 
        Validators.minLength(6), 
        Validators.maxLength(32), 
        this.onValidateNameHasProduct]),
      // price: new FormControl(0)
    });
    this.productId = '0';
   }

  ngOnInit(): void {
    this.productId = this.activateRoute.snapshot.params['_id'];
    if(this.productId){
      this.productService.getProduct(this.productId).subscribe(data => {
        // Gán giá trị cho form, patchValue 
        this.productForm.patchValue({
          name: data.name
        });
      });
    }
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    //1. Lấy ra value của formControl name hiện tại
    const {value} =  control;
    //2.Kiểm tra theo điều kiện chứa từ khóa 'product'
    if(!value.includes('product')){
      return {hasProductError: true};
    }
    //3.
    return null;
  }
  onSubmit(){
    //1. Lấy dữ liệu từ form
    console.log(this.productForm.value);
    const submitData = this.productForm.value;
    if(this.productId !== '0' || this.productId !== undefined){
      return this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products');
      })
    }
    //2. Call API
    return this.productService.createProduct(submitData).subscribe((data) => {
      this.router.navigate(['/admin', 'products'])
    })
    
  }

}
