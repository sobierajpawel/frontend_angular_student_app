import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';
import { delay } from 'rxjs';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  isValidationRequiredFailed = false;
  isStudentAdded = false;
  studentAddedText = "";
  isSubmitting : boolean = false;

  constructor(private studentService : StudentService){

  }

  save(name : string, email : string){
    this.isSubmitting = true;
    this.isValidationRequiredFailed = false;

    if (!name || !email){
      this.isValidationRequiredFailed = true;
      this.isSubmitting = false;
      return;
    }
    
    this.studentService.addStudent({name, email} as Student)
    .pipe(delay(2000))  
    .subscribe(student=>{
        console.log("Dodano studenta o id:" + student.id);
        this.isStudentAdded = true;
        this.studentAddedText = "Dodano studenta o id:" + student.id + ", imię i nazwisko: " + student.name;
        this.isSubmitting = false;
      });

    return false;
  }

}
