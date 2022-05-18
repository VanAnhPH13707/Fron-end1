import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-val',
  templateUrl: './show-val.component.html',
  styleUrls: ['./show-val.component.css']
})
export class ShowValComponent implements OnInit {
  @Input() field:any
  @Input() key:string
  constructor() {
    this.key=''
   }

  ngOnInit(): void {
  }

}
