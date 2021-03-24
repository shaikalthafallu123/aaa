import { Component, Input, OnInit, EventEmitter, SimpleChanges, Output } from '@angular/core';

export type Order = {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public order: Order = {
    id: 1,
    name: "",
    description: "",
  }
  display2: string;
  display: string;
  display3: string;

  constructor() { }
  ngOnInit() {


  }
  save() {
   this.display2 = "block";
    this.display = "none";
     this.display3 = "none";
  }
  edit() {
    this.display = "";
    this.display2 = "";
    this.display3 = "";
  }

  }

