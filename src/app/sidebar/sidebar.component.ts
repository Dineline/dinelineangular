import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
loc_id:any;
balst_menu:any;
  constructor(private activatedRoute: ActivatedRoute,public http: HttpClient) { }

  ngOnInit(): void {
    this.loc_id=this.activatedRoute.snapshot.params['loc_id'];
    this.http.get("https://data.dineline.store/blasts_data_api.php?loc_id="+this.loc_id)
      .subscribe(data => {
        if(data!=''){
          this.balst_menu=data;
          this.balst_menu=this.balst_menu.blasts_data;

          // console.log(this.balst_menu);
        }

       }, error => {
        console.log(error);
      });
  }

}
