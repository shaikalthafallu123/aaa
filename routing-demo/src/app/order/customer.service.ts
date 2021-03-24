import { Injectable } from '@angular/core';

export type user={
  id:number;
  name:string;
  description:string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
public count:number=1;
public users:user[]=[];
  constructor() { }

  public addUser(cusDetails:user){
    this.users.push({...cusDetails,id:this.count++});

  }
  public updateUser(data:any){
    let index=this.users.map(x=>x.id).indexOf(data.id);
    if(index !-- -1){
      this.users[index]=data;
      
    }
  }
}

