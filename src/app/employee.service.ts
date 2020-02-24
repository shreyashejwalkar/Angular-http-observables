import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from 'src/employee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmployeeService 
{

  private _url: string = "/assets/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}