import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-robotfirst',
  templateUrl: './robotfirst.component.html',
  styleUrls: ['./robotfirst.component.css']
})
export class RobotfirstComponent implements OnInit {
  @ViewChild('numrobot') numrobot
 number ;
 validrobot=true;
  constructor(private _router : Router) { }

  ngOnInit() {
    
  }


  openrobot(form : NgForm){
    var numrobot1=form.value.numberofrobot;
    if(numrobot1<=5 && numrobot1>=1){
      this.validrobot=true;
      this._router.navigate(["robotsecond/",this.number]);
    }
    else{
      this.validrobot=false;
    }

  }

}
