import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RobotComponent } from './robot/robot.component';
import { RobotfirstComponent } from './robotfirst/robotfirst.component';
import { RobotsecondComponent } from './robotsecond/robotsecond.component';
import { FormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { GetdataService } from './getdata.service';

@NgModule({
  declarations: [
    AppComponent,
    RobotComponent,
    RobotfirstComponent,
    RobotsecondComponent,
    MapComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey : ''
    }),
  ],
  providers: [GetdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
