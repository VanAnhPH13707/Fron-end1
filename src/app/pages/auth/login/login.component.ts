import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.loginForm.value);
    //1.Nhận dữ liệu từ form và call API login
    this.authService.login(this.loginForm.value).subscribe(data => {
      //2. Lưu thông tin user vào localStorage: setItem(tên key lưu vào ls, dữ liệu string)
      localStorage.setItem('user', JSON.stringify(data));
      localStorage.getItem('user')
      // localStorage.getItem('loggedInUser');
      //3. di chuyển về màn admin
      this.router.navigateByUrl('/');
    })
    

  }

}
