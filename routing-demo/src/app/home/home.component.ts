import { Component, Input, OnInit,EventEmitter } from '@angular/core';
import { Hero } from '../hero.mode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
@Input()student:string='allu group of institution';

  name:string='helo i m parent';

  public count:number=0;
public num:number
  display2: string;
  display3: string;
  display: string;
  order: any;

  ngOnInit(): void {
  }

  clickMe(){
    this.count++;
  }
    save(){
    console.log(this.student);
  
  } 
 

}


