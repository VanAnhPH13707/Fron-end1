import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-category-form',
  templateUrl: './admin-category-form.component.html',
  styleUrls: ['./admin-category-form.component.css']
})
export class AdminCategoryFormComponent implements OnInit {
  categoryForm: FormGroup;
  categoryId: string 
  constructor(
    private CategoryService: CategoryService, //cung cấp create cho 
    private router: Router,  //cung cấp navigate điều hướng
    private activateRoute: ActivatedRoute // lấy ra tham số url
  ) { 
    this.categoryForm = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        this.onValidateNameHasCategory
      ] )
    })
    this. categoryId = "0";
  }

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params['id'];
    if(this.categoryId){
      this.CategoryService.getCate(this.categoryId).subscribe(data =>{
        // gán giá trị cho form
        this.categoryForm.patchValue({
          name: data.name
        })
      })
    }
   
  }

  onValidateNameHasCategory(control: AbstractControl) : ValidationErrors | null {
    const {value} = control;

    if(!value.includes('category')){
      return {hasCategoryError: true}
    }

    return null
  }
  onSubmit() {
    // console.log(this.productForm.value);

    //1: lấy dữ liệu từ form
    const submitData = this.categoryForm.value;

    if(this.categoryId !== "0" || this.categoryId !== undefined){
       this.CategoryService.updateCategory(this.categoryId, submitData).subscribe(data =>{
        this.router.navigateByUrl('/admin/category')
      })
    }

    //2: callAPI (cần định nghĩa service và router điều hướng)
    this.CategoryService.createCategory(submitData).subscribe((data) => {
      //3: sau khi api call thành công thì sẽ điều hướng về danh sách
      // this.router.navigate(['/admin', 'product'])
      this.router.navigateByUrl("/admin/category")
    })
  }

}
