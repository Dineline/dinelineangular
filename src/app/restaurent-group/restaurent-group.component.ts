import { Component, OnInit,ElementRef  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-restaurent-group',
  templateUrl: './restaurent-group.component.html',
  styleUrls: ['./restaurent-group.component.scss']
})
export class RestaurentGroupComponent implements OnInit {
  loc_id:any;
  tab_value:any;
  id:any;
  restaurent_data:any;
  location_data:any;
  _storage:any;
  httpOptions:any;
  postData: any;
  show: any;
  constructor(public http: HttpClient,public router: Router,private el: ElementRef,private activatedRoute: ActivatedRoute) { }

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

  convert_add(a:any,b:any){
    a=a.replace(/,/g, '');
    a=a.substring(0, a.indexOf('.')-1 + '.'.length);
    a=Number(a);
    b=b.replace(/,/g, '');
    b=b.substring(0, b.indexOf('.')-1 + '.'.length);
    b=Number(b);
    return a+b;
  }
  add(a:any,b:any){
    b=Number(b);
    a=Number(a);

    return a+b;
  }
  ngOnInit(): void {
    this.tab_value='email';
    this.loc_id=this.activatedRoute.snapshot.params['loc_id'];
    console.log(this.loc_id);
    this.show=true;

    this.http.get("https://data.dineline.store/google_data_api.php?loc_id="+this.loc_id)
      .subscribe(data => {
        if(data!=''){
          this.location_data=data;
          this.location_data=this.location_data.group_data;
          this.restaurent_data=data;
          this.restaurent_data=this.restaurent_data.gmb_data[0];
          let len=this.location_data.length
          if(len==1){
            this.show=true;
          }else{
            this.show=false;
          }
          console.log(this.show,this.location_data.length);
        }

       }, error => {
        console.log(error);
      });

  }

}
