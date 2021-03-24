import { Component,Input, EventEmitter, Output } from '@angular/core';

import { Hero } from '../hero.mode';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements Hero {
  heroes: Hero[] =
  [{ name: "Althaf",type: "" },
  { name: "sabina", type: "" },
  { name: "aaruhi", type: "" }
];

title:string="hello Althaf"
 constructor() { 

 
}
  name: string;
  type: any;

  print(){
    console.log(this.title);
  }
}