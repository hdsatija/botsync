import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  addrobot(){
    this._router.navigate(["robotfirst"]);
      }
  
}
