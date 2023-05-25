import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../models/student';
import { catchError, delay, retry, throwError } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  // 3) Informacja dla użytkowników o tym co się dzieje -> zapis/sukces.
  // ts->html->ts
  student! : Student;
  isStudentUpdated : boolean = false;
  isSubmiting = false;
  isUpdatedError = false;

  constructor(private studentService : StudentService,
    private activedRoute : ActivatedRoute, private location: Location,
    private router : Router){

  }

  ngOnInit(): void {
    let id = this.activedRoute.snapshot.paramMap.get("id");

    console.log("Wybrano edycje studenta dla id: " + id);

    this.studentService.getStudent(Number(id))
      .subscribe(data=>{
        console.log("Otrzymano odpowiedź z serwera");
        console.log(data);
        this.student = data;
      });

    console.log("Wywołanie");
  }

  update() : void{
    this.isSubmiting = true;

    this.studentService.updateStudent(this.student)
      .pipe(delay(2000))
      .pipe(retry(3))
      .pipe(catchError(error=>{
        console.log("Wystąpił błąd na serwerze");
        this.isUpdatedError = true;
        this.isSubmiting = false;

        return throwError(()=> error);
      }))
      .subscribe(()=>{
        console.log("Zaktualizowano dane studenta");
        this.isStudentUpdated = true;
        this.isSubmiting = false;
        // this.student.name = "";
        // this.student.email = "";
        // this.location.back();
        // this.router.navigate(["/students"]);
      });
  }
}
