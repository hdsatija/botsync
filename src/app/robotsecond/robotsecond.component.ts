import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from '../getdata.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-robotsecond',
  templateUrl: './robotsecond.component.html',
  styleUrls: ['./robotsecond.component.css'],
  // providers : [GetdataService] ,
})
export class RobotsecondComponent implements OnInit {
  robotip=[];
  robotid =[];
  robotname=[];
  numbers ;
  robots;
  arr;
  num;
  data =[];
  
  constructor( private route: ActivatedRoute , private _router : Router , private dataservice : GetdataService) { 
    this.robots=this.route.snapshot.paramMap.get('num');
    this.num=this.robots;
     this.arr = new Array<number>(this.robots);
     this.arr.length=this.robots;
    console.log(this.arr);
  }

  ngOnInit() {
  }
  getdata(){
    
    return this.data;
  }
  submitall(f: NgForm){

    var i=0;
    for ( let c of this.arr ) {
      this.data[i]={
        id : this.robotid[i],
      name : this.robotname[i],
      ip: this.robotip[i],
      }
      i++;
    }
    console.log(this.data);
    this.dataservice.data=this.data;   
     this._router.navigate(["map/",this.num]);

  }
}
