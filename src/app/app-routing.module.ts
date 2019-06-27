import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RobotComponent } from './robot/robot.component';
import { RobotfirstComponent } from './robotfirst/robotfirst.component';
import { RobotsecondComponent } from './robotsecond/robotsecond.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: '', component: RobotComponent },
  { path: 'robotfirst', component: RobotfirstComponent },
  { path: 'robotsecond/:num', component: RobotsecondComponent },
  { path : 'map/:num', component : MapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
