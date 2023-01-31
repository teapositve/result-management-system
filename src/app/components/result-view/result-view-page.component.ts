import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/result-page/api.service';

@Component({
  selector: 'app-result-view-page',
  templateUrl: './result-view-page.component.html',
  styleUrls: ['./result-view-page.component.css']
})
export class ResultViewPageComponent implements OnInit {
  student: any;
  data:any;
  id:any;

  constructor(private api: ApiService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOne();
  }

  //Get Student Detail Method
  getOne(){
    this.api.getOneStu(this.id).subscribe(data=>{
      this.data = data;
      console.log(this.data);
    })
  }
}
