import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-login-page',
  templateUrl: './teacher-login-page.component.html',
  styleUrls: ['./teacher-login-page.component.css']
})
export class TeacherLoginPageComponent implements OnInit {
  teacherLoginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.teacherLoginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  //Login Method Define  
  teacherLogin() {
    this._http.get<any>("http://localhost:3000/teacher-signup").subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.teacherLoginForm.value.email && a.password === this.teacherLoginForm.value.password
      })
      if (user) {
        alert("User Login Succesfull !!")
        this.teacherLoginForm.reset();
        this.router.navigate(['record-page'])
      } else {
        alert("User Not Found !!")
      }
    }, err => {
      alert("Something Went Wrong from Server Side !!")
    }
    )
  }
}
