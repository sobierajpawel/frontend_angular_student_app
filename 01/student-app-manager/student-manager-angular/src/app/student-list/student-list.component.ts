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
  isStudentRemoved : boolean = false;
  removedStudentName = "";

  constructor(private studentService: StudentService){
    this.studentService.getStudents()
      .subscribe(data =>{
        console.log(data);
        this.students = data;
      });

      console.log("Test");
  }

  delete(student : Student){
    // 1) Zaimplementować metodę DELETE w StudentService - DONE
    // 2) Dostaniemy prawidłową odpowiedź -> usunąć z tablicy tego studenta
    // (tak by odświeżyć szablon) - DONE
    // 3) Powiadomienie wizualne na UI o usunięciu danego studenta - *ngIf
    
    this.studentService.deleteStudent(student.id)
      .subscribe(()=>{
        this.students = this.students.filter(s=>s!== student);
        this.isStudentRemoved = true;
        this.removedStudentName = student.name;
      });
  }
}
