import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = [];

  constructor(private studentService: StudentService){
    this.studentService.getStudents()
      .subscribe(data =>{
        console.log(data);
        this.students = data;
      });

      console.log("Test");
  }
}
