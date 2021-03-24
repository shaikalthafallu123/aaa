import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit ,OnChanges,OnDestroy{
  constructor(private router:Router){}
  @Input() order:any;
  @Output() sendData=new EventEmitter;
  
  ngOnDestroy(): void {
    console.log("component Intialized");
  }
  ngOnChanges(data:any){
console.log(data);
console.log("component Intialized");
  }
  

  ngOnInit(): void {
    console.log("component Intialized");
  }
  updateData(){
    this.sendData.emit(this.order);
  }
  }


