import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() users: any;
  //1.Định ngĩa sự kiện trả ngược dữ liệu trả khi edit
  @Output() handleEdit: EventEmitter<number>
  @Output() handleDelete: EventEmitter<number>
  constructor() { 
    this.handleEdit = new EventEmitter();
    this.handleDelete = new EventEmitter();
  }

  ngOnInit(): void {
  }
  onEdit(userId: number){
    this.handleEdit.emit(userId);
  }
  onDelete(userId: number){
    this.handleDelete.emit(userId);
  }

}
