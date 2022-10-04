import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string 
  category: Category[]
  file: string
  imgOld: string
  img: string
  constructor(
    private ProductService: ProductService, //cung cấp create cho 
    private router: Router, 
    private CategoryService: CategoryService,
    private fileUploadService: FileUploadService, 
    private activateRoute: ActivatedRoute // lấy ra tham số url
  ) { 
    this.productForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        // this.onValidateNameHasProduct
      ] ),
      category: new FormControl(''),
      author: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      sale_price: new FormControl(''),
      desc: new FormControl(''),

    })
    this. productId = "0";
    this.category = []
    this.file = ''
    this.img = ''
    this.imgOld =''
  }

  ngOnInit(): void {
    this.CategoryService.getCategory().subscribe((data) => {
      this.category = data;
    })
    this.productId = this.activateRoute.snapshot.params['id'];
    if(this.productId){
      this.ProductService.getProduct(this.productId).subscribe(data =>{
        // console.log(data);
        this.imgOld = data.image
        // gán giá trị cho form
        this.productForm.patchValue({
          name: data.name,
          category: data.category,
          author: data.author,
          image: data.image,
          price: data.price,
          sale_price: data.sale_price,
          desc: data.desc
        })
      })
    }
   
  }
  onChange(event: any) {
    this.file = event.target.files[0];
    this.fileUploadService.upload(this.file).subscribe((data) => {
      this.img = data.secure_url
    })


  }

  onValidateNameHasProduct(control: AbstractControl) : ValidationErrors | null {
    const {value} = control;

    if(!value.includes('product')){
      return {hasProductError: true}
    }

    return null
  }
  onSubmit() {
    // console.log(this.productForm.value);

    //1: lấy dữ liệu từ form
    const submitData = this.productForm.value;
    if (this.file == "") {
      submitData.image = this.imgOld;
    } else {
      submitData.image = this.img
    }
    console.log(submitData.image);
    console.log(this.productId);
    
    if(this.productId !== "0" && this.productId !== undefined){
       return this.ProductService.updateProduct(this.productId, submitData).subscribe(data =>{
        this.router.navigateByUrl('/admin/products')
      })
    }

    //2: callAPI (cần định nghĩa service và router điều hướng)
    return this.ProductService.createProduct(submitData).subscribe((data) => {
      //3: sau khi api call thành công thì sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'product'])
      this.router.navigateByUrl("/admin/products")
    })
  }

}
