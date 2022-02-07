import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dani',
  templateUrl: './dani.component.html',
  styleUrls: ['./dani.component.scss']
})
export class DaniComponent implements OnInit {
  loc_id:any;
  id:any;

  feedback_data:any;
  intent_data:any;
  main_data:any;
  _storage:any;
  httpOptions:any;
  postData: any;
  show: any;
  constructor(public http: HttpClient,public router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.show=true;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
    })
  }

  // Pass to next layer of middleware

    this.loc_id=this.activatedRoute.snapshot.params['loc_id'];
    this.id=this.activatedRoute.snapshot.params['id'];
    console.log(this.loc_id);


    this.http.get("https://admin.dineline.chat/dashboard_data.php?id="+this.loc_id)
      .subscribe(data => {
        // console.log(data);
        this.main_data=data;
        this.intent_data=this.main_data.intent_data;
        this.feedback_data=this.main_data.feedback_data;
        console.log(this.main_data);

       }, error => {
        alert(error);
      });
  }


}
