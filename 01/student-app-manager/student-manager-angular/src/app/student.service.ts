import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentApiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient : HttpClient) { }

  getStudents(){
    // musimy pobrać listę studentów z zewnętrznego serwera/API
    return this.httpClient.get<Student[]>(this.studentApiUrl);
  }

  getStudent(id :number){
    let url = `${this.studentApiUrl}/${id}`;
    return this.httpClient.get<Student>(url);
  }

  deleteStudent(id : number){
    let url = `${this.studentApiUrl}/${id}`;
    return this.httpClient.delete<Student>(url);
  }

  addStudent(student: Student){
    return this.httpClient.post<Student>(this.studentApiUrl, student);
  }

  updateStudent(student: Student){
    let url = `${this.studentApiUrl}/${student.id}`;
    return this.httpClient.put<Student>(url, student);
  }
}
