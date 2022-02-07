import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { RouterModule } from '@angular/router';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blasts',
  templateUrl: './blasts.component.html',
  styleUrls: ['./blasts.component.scss']
})
export class BlastsComponent implements OnInit {
  tab_value:any;
  loc_id:any;
  id:any;
  emailChart:any;
  dataTable:any=[];
  delivered:any;
  blasts_data:any=[
    ['Total Emails', 'kjh'],
    ['Delivered',     11],
    ['Opened',      2],
    ['Clicked',      2],
    ['Replied',      2],
    ['Bounced',      2],
    ['Unsubscribed',  2],
  ];

  constructor(public RouterModule:RouterModule,private activatedRoute: ActivatedRoute,public http: HttpClient) { }
  ngOnInit(): void {

    this.tab_value='email';
    this.loc_id=this.activatedRoute.snapshot.params['loc_id'];
    this.id=this.activatedRoute.snapshot.params['id'];
    this.http.get("https://data.dineline.store/blasts_data_api.php?id="+this.id)
      .subscribe(data => {
        if(data!=''){
          this.blasts_data=data;
          this.blasts_data=this.blasts_data.blasts_data[0];
          this.delivered=this.blasts_data.email_bounced;
          // this.smsChart;
          let emailChart: GoogleChartInterface = {

            chartType: GoogleChartType.PieChart,
            dataTable: this.dataTable,
            //firstRowIsData: true,
            options: {'title': 'Tasks',padding: {
              top: 0,
              right: 0,
              bottom: 100,
              left: 0,
            },
            pieHole: 0.4,
            pointSize: 5,
            chartArea: { 'width': '80%', 'height': '80%' },
            legend: {position: 'bottom', maxLines: 3},
            height:400,pieSliceTextStyle: {
              color: 'black',chartArea: { 'width': '80%', 'height': '80%' }},pieSliceText: 'label',},
          };
          this.emailChart=emailChart;
          console.log(this.blasts_data.email_bounced);
        }

       }, error => {
        console.log(error);
      });
  }

  public smsChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Total Emails', '45678'],
      ['Delivered',     11],
      ['Delivered',      2],
      ['Clicked',      2],
    ],
    //firstRowIsData: true,
    options: {'title': 'Tasks',padding: {
      top: 0,
      right: 0,
      bottom: 100,
      left: 0,
    },
    pieHole: 0.4,
    pointSize: 5,
    chartArea: { 'width': '80%', 'height': '80%' },
    legend: {position: 'bottom', maxLines: 3},
    height:400,pieSliceTextStyle: {
      color: 'black',chartArea: { 'width': '80%', 'height': '80%' }},pieSliceText: 'label',},
  };
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


  public tab(value:string){
    this.tab_value=value;
  }

}
