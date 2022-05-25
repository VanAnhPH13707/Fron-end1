import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() inputValues: any
  @Output() handleSubmit: EventEmitter<any>
  constructor() {
    this.handleSubmit = new EventEmitter();
   }

  ngOnInit(): void {
  }
  
  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    //3.Bắn dữ liệu , tương tự Input nhưng theo chiều ngược lại
    this.handleSubmit.emit(userForm.value);
    

    
  }

}
