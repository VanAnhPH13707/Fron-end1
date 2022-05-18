import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dame',
  templateUrl: './dame.component.html',
  styleUrls: ['./dame.component.css']
})
export class DameComponent implements OnInit {
  @Input() champDame: number;
  constructor() {
    this.champDame =0;
   }

  ngOnInit(): void {
  }

}
