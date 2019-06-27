import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
public data =[];

  constructor() { }
   
// public setdata(dataa :any){
//    console.log('this is lit');
//    this.data=dataa;
//    console.log(this.data);
//  }
//  public getdata(){
//    console.log('called');
//    console.log(this.data);
//   return this.data;
//  }
}
