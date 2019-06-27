import { Component, OnInit , AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  //  providers : [GetdataService]
})
export class MapComponent implements OnInit ,AfterViewInit {
  
  lat = 12.9716;
  lng = 77.5946;
  robots; num; arr; map; 
  data =[];
  value;
  latitude = 12.9716;
  longitude = 77.5946;
  mapType = 'satellite';
  // lat = 43.879078;
  // lng = -103.4615581;
  selectedMarker;
  markers = [   
  ];
  locationset =[
    { lat: 12.9716, lng: 77.5946, alpha: 1 , data :{}},
    { lat: 12.9928, lng: 77.3831, alpha: 1 , data :{} },
    { lat: 13.4050, lng: 78.1078, alpha: 1 , data :{} },  
    { lat: 13.4206, lng: 76.8063, alpha: 1 , data :{} },    
    { lat: 12.7679, lng: 76.9271, alpha: 1 , data :{} },
  ];

  
  constructor( private route: ActivatedRoute , private _router : Router, private dataservice : GetdataService) { 
    this.robots=this.route.snapshot.paramMap.get('num');
    this.num=this.robots;
     this.arr = new Array<number>(this.robots);
     this.arr.length=this.robots;

    // geting data from data service
    this.data=this.dataservice.data;

    var i=0;
    for ( let c of this.arr ) {
      this.locationset[i].data=this.data[i];
      this.markers.push(this.locationset[i]);
      i++;
    }
    

  }
  addMarker(lat: number, lng: number) {
    
    // this.markers.push({ lat, lng, alpha: 0.4 });
  }

  max(coordType: 'lat' | 'lng'): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: 'lat' | 'lng'): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event , markers) {
    console.log(markers.data);
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude,
      value : markers.data,
    };
  }

 

  ngOnInit() {
    // this. map = new google.maps.Map(document.getElementById('map'), {
    //   center: {lat: 12.9716, lng: 77.5946},
    //   zoom: 8
    // });
   
   
}

ngAfterViewInit(): void{
  


}


}