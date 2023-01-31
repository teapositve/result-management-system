import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  //Create Result using POST Method
  postResult(data: any) {
    return this._http.post<any>("http://localhost:3000/posts/", data).pipe(map((res: any) => {
      return res;
    }))
  }

  //Get Result data using Get Method
  getResult() {
    return this._http.get<any>("http://localhost:3000/posts/").pipe(map((res: any) => {
      return res;
    }))
  }

  //Get Result update using PUT Method
  updateResult(data: any, id: number) {
    return this._http.put<any>("http://localhost:3000/posts/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  //Delete data using DELETE Method
  deleteResult(id: number) {
    return this._http.delete<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }

  //Get Student Detail Method
  getOneStu(id: any) {
    return this._http.get<any>("http://localhost:3000/posts/" + id).pipe(map((res: any) => {
      return res;
    }))
  }
}

