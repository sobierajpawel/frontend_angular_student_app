import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  isStudentRemoved: boolean = false;
  removedStudentName = "";

  constructor(private studentService: StudentService, private router: Router) {
    console.log("Wywołanie konstruktora");
  }

  ngOnInit(): void {
    console.log("Wywołanie metody ngOnInit");

    this.studentService.getStudents()
      .subscribe(data => {
        console.log(data);
        this.students = data;
      });

  }

  delete(student: Student) {
    // 1) Zaimplementować metodę DELETE w StudentService - DONE
    // 2) Dostaniemy prawidłową odpowiedź -> usunąć z tablicy tego studenta
    // (tak by odświeżyć szablon) - DONE
    // 3) Powiadomienie wizualne na UI o usunięciu danego studenta - *ngIf

    this.studentService.deleteStudent(student.id)
      .subscribe(() => {
        this.students = this.students.filter(s => s !== student);
        this.isStudentRemoved = true;
        this.removedStudentName = student.name;
      });
  }

  goToDetails(id : number){
    this.router.navigate(["/detail-student/"+ id]);
  }
}
