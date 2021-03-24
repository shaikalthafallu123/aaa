import { Component, Input,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

name:string='hello';
  display: string;

  constructor() { }


  ngOnInit(): void {
  }

  onprintclicked(e:any){
console.log(e);
  }

edit(){
  this.display="none"
}
}

