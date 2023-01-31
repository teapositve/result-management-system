import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordPageComponent } from './components/record-page/record-page.component';
import { TeacherLoginPageComponent } from './components/teacher-login-page/teacher-login-page.component';
import { TeacherSignupPageComponent } from './components/teacher-signup-page/teacher-signup-page.component';
import { StudentLoginPageComponent } from './components/student-login-page/student-login-page.component';
import { ResultViewPageComponent } from './components/result-view/result-view-page.component';
import { StudentSignupPageComponent } from './components/student-signup-page/student-signup-page.component';


@NgModule({
  declarations: [
    AppComponent,
    RecordPageComponent,
    TeacherLoginPageComponent,
    TeacherSignupPageComponent,
    StudentLoginPageComponent,
    StudentSignupPageComponent,
    ResultViewPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
