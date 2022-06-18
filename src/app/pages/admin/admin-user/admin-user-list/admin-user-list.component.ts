import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/Auth';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {
  users: User[];
  user: User;

  constructor(
    private authService: AuthService
  ) {
    this.users = []
    this.user = {
      _id: "",
      name: "",
      email: "",
      role: 0
    }
   }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data) =>{
      this.users = data;
    })
  }
  onGetList(){
    this.authService.getUsers().subscribe((data) =>{
      this.users = data;
    })
  }

}
