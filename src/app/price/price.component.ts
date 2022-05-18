import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input() price : number;
  @Input() src : string;
  constructor() {
    this.price = 0;
    this.src = '';
   }

  ngOnInit(): void {
  }

}
