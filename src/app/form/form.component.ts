import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  inputValues = {
    name: '',
    age: 0,
    email:'',
    sdt: 0
  };
  users = [
    {
      id:1,
      name:'anhntv',
      age: 20,
      email:'anhntvph13707@fpt.edu.vn',
      sdt: 975703356
      
    }
  ];
  onSubmit(userForm:NgForm){
    console.log(userForm.value);
    
    // console.log(formData);
    //0.Tìm id lớn nhất đang có để + 1
    const newUserIds = this.users
    .map(users => users.id) // lấy ra mảng mới chỉ có id
    .sort((a:number, b:number) => b-a); // sort các id đang có
    const maxId = newUserIds[0]
    //1. Push dữ liệu mới nhận từ form vào mảng
    if (userForm.value.id === 0){
      this.users.push({
        ...userForm.value,
        id: maxId +1
      });
    }else{

    }
    
    //2. Cập nhật giá trị của inputValues về default
    userForm.resetForm ({
      name:'',
      age: 0,
      email:'',
      sdt: 0
    });
  }
  onRemove(id:number){
    this.users = this.users.filter(item => item.id !== id)
  }
  onEdit(user: any){
    this.inputValues = user;
  }
}
