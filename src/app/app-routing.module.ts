import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RecordPageComponent } from './components/record-page/record-page.component';
import { ResultViewPageComponent } from './components/result-view/result-view-page.component';
import { StudentLoginPageComponent } from './components/student-login-page/student-login-page.component';
import { StudentSignupPageComponent } from './components/student-signup-page/student-signup-page.component';
import { TeacherLoginPageComponent } from './components/teacher-login-page/teacher-login-page.component';
import { TeacherSignupPageComponent } from './components/teacher-signup-page/teacher-signup-page.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home', component: HomePageComponent
  },
  {
    path: 'teacher-login', component: TeacherLoginPageComponent
  },
  {
    path: 'teacher-signup', component: TeacherSignupPageComponent
  },
  {
    path: 'record-page', component: RecordPageComponent
  },
  {
    path: 'student-login', component: StudentLoginPageComponent
  },
  {
    path: 'student-signup', component: StudentSignupPageComponent
  },
  {
    path: 'result/:id', component: ResultViewPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
