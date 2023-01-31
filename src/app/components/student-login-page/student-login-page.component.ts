import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/result-page/api.service';

@Component({
  selector: 'app-student-login-page',
  templateUrl: './student-login-page.component.html',
  styleUrls: ['./student-login-page.component.css']
})
export class StudentLoginPageComponent implements OnInit {
  studentLoginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.studentLoginForm = this.formBuilder.group({
      rollno: [''],
      name: ['']
    })
  }

  //Student Login Method Define
  studentLogin(){
    // console.log(this.studentLoginForm.value.rollno);
    this._http.get<any>("http://localhost:3000/posts").subscribe(res => {
      const user = res.find((a: any) => {
        console.log("in method" + a.rollno)
        return a.rollno === this.studentLoginForm.value.rollno && a.name === this.studentLoginForm.value.name
      })
      if (user) {
        alert("User Login Succesfull !!")
        this.studentLoginForm.reset();
        this.router.navigate(['result/'+user.id])
      } else {
        alert("Invalid Credential !!")
      }
    }, err => {
      alert("Something Went Wrong from Server Side !!")
    }
    )
  }

}
