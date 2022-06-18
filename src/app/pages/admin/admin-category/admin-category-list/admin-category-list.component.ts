import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/Category';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  category: Category[];
  constructor(private categoryService: CategoryService) { 
    this.category = [];
  }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.categoryService.getCategory().subscribe((data) =>{
      this.category = data;
    })
  }
  onDelete(_id:number){
    const confirm = window.confirm("Bạn chắc chắn muốn xóa ?")
    if (confirm && _id) {
      this.categoryService.deleteCategory(_id).subscribe((data) =>{
        console.log(data);
        this.onGetList();
        
      })
    }
  }


}
