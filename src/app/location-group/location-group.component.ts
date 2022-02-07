import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router, ActivatedRoute, Params} from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-location-group',
  templateUrl: './location-group.component.html',
  styleUrls: ['./location-group.component.scss']
})
export class LocationGroupComponent implements OnInit {
  loc_id:any;

  location_data:any;
  _storage:any;
  httpOptions:any;
  postData: any;
  show: any;
  constructor(public http: HttpClient,public router: Router,private activatedRoute: ActivatedRoute) { }
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
    this.loc_id = params['loc_id'];
    // alert(this.loc_id);
  });
    this.show=true;
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //   })
  // }

    this.http.get("https://data.dineline.store/location_group_data_api.php?loc_id="+this.loc_id)
      .subscribe(data => {

        this.location_data=data;
        // this.location_data=this.location_data.loc_data;
        console.log(this.location_data);
       }, error => {
        // alert(error);
      });

  }

}
