import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient : HttpClient) { }

  getStudents(){
    // musimy pobrać listę studentów z zewnętrznego serwera/API
    return this.httpClient.get<Student[]>("https://jsonplaceholder.typicode.com/users");
  }
}
