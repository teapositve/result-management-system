import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecordData } from 'src/app/models/record-page.model';
import { ApiService } from 'src/app/services/result-page/api.service';

@Component({
  selector: 'app-record-page',
  templateUrl: './record-page.component.html',
  styleUrls: ['./record-page.component.css']
})
export class RecordPageComponent implements OnInit {
  formValue!: FormGroup
  recordModelObj: RecordData = new RecordData;
  allRecordData: any;
  showAdd!:boolean
  showbtn!:boolean;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      rollno: [''],
      name: [''],
      dob: [''],
      score: [''],
    })
    this.getAllData();
  }

  clickAddRecord(){
    this.formValue.reset();
    this.showAdd = true;
    this.showbtn = false;

  }

  //Now Subscribing data
  addRecord() {
    this.recordModelObj.rollno = this.formValue.value.rollno;
    this.recordModelObj.name = this.formValue.value.name;
    this.recordModelObj.dob = this.formValue.value.dob;
    this.recordModelObj.score = this.formValue.value.score;

    this.api.postResult(this.recordModelObj).subscribe(res => {
      console.log(res);
      alert("Result Record Added Successfully !!");

      //Clear form filled data
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset(); //Form reset after adding record
      this.getAllData(); //Get quick data reflect in table
    },
      err => {
        alert("Something went wrong !!");
      })
  }

  //Get All Data
  getAllData() {
    this.api.getResult().subscribe(res => {
      this.allRecordData = res;
    })
  }

  //Delete Records
  deleteRecord(data: any) {
    this.api.deleteResult(data.id).subscribe(res => {
      alert("Record Deleted Successfully !!")
      this.getAllData();
    })
  }

  //Edit Records
  onEditRecord(data: any) {
    this.showAdd = false;
    this.showbtn = true;
    this.recordModelObj.id = data.id
    this.formValue.controls['rollno'].setValue(data.rollno);
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['dob'].setValue(data.dob);
    this.formValue.controls['score'].setValue(data.score);
  }

  //Update Records
  updateRecord(){
    this.recordModelObj.rollno = this.formValue.value.rollno;
    this.recordModelObj.name = this.formValue.value.name;
    this.recordModelObj.dob = this.formValue.value.dob;
    this.recordModelObj.score = this.formValue.value.score;

    this.api.updateResult(this.recordModelObj,this.recordModelObj.id).subscribe(res => {
      alert("Record Updated Successfully !!")

      //Clear form filled data
      let ref=document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    })
  }
}


