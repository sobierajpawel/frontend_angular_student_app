import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs';
import { Student } from '../models/student';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  student! : Student;
  // 1) Pobrać dane studenta o id -> dodamy sobie dwie właściwości
  // 2) Zbudujemy html -> we wszystkich komponentach
  // 3) Powiążemy rodzic->dziecko i dziecko->rodzic
  // 4) Logike do przycisków w tym komponencie - rodzic
  constructor(private studentService : StudentService, private activedRoute : ActivatedRoute){

  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(param=>{
      this.studentService.getStudent(Number(param["id"]))
        .subscribe(data=>{
         this.student = data;
        });

    });
  }
}
