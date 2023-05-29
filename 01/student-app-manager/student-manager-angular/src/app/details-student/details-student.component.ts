import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs';
import { Student } from '../models/student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-student',
  templateUrl: './details-student.component.html',
  styleUrls: ['./details-student.component.css']
})
export class DetailsStudentComponent implements OnInit {
  student! : Student;
  id : number = 0;
  // 3) Logike do obsługi  dziecko->rodzic
  // 4) Logike do przycisków w tym komponencie - rodzic
  constructor(private studentService : StudentService, 
    private activedRoute : ActivatedRoute, private location : Location,
    private router : Router){

  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(param=>{
      this.studentService.getStudent(Number(param["id"]))
        .subscribe(data=>{
         this.student = data;  
        });
        this.id = Number(param["id"]);
    });
  }

  getBack(){
    console.log("Metoda back - powrót do poprzedniej strony");
    this.location.back();
  }

  edit(){
    console.log("Metoda edit - uruchamiam edycje studenta");
    this.router.navigate(["/edit-student/"+this.id]);
  }
}
