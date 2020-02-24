import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from 'src/employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService 
{

  private _url: string = "/assets/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
  }
  errorHandler(error : HttpErrorResponse)
  {
     return Observable.throw(error.message || "Server error");
  }
}