import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-signup-page',
  templateUrl: './teacher-signup-page.component.html',
  styleUrls: ['./teacher-signup-page.component.css']
})
export class TeacherSignupPageComponent implements OnInit {

  teacherSignupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.teacherSignupForm = this.formBuilder.group({
      email: [''],
      mobile: [''],
      password: ['']
    })
  }

  //Make method to create user(Signup Method)
  teacherSignup() {
    this._http.post<any>("http://localhost:3000/teacher-signup", this.teacherSignupForm.value).subscribe(res => {
      alert("Registration Successfull !!")
      this.teacherSignupForm.reset();
      this.router.navigate(['teacher-login'])
    }, err => {
      alert("Something went Wrong !!")
    }
    )
  }

}
