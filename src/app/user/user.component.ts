import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  users = [
    {
      id: 1,
      name: 'anhntv',
      age: 20,
      email: 'anhntvph13707@fpt.edu.vn',
      sdt: 975703356

    },
    {
      id: 2,
      name: 'Vân Anh',
      age: 20,
      email: 'vananh@gmail.com',
      sdt: 975703356

    }
  ];
  formValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    sdt: 0
  };
  onCreateUser(newUser:any){
    console.log(newUser);
    
  }
  onEditUser(userId: number){
    const editUser= this.users.find(user => user.id === userId)
    if(editUser){
      this.formValues = {...editUser};
    }
  }
}
