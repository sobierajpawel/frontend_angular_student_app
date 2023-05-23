import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
  // 1) W student service metode do wysyłki nowego studenta -> POST.
  // 2) Powiadomić użytkownika -> alert że udało nam się dodać nowego studenta
  // 3) Walidacja -> czy pola są wypełnione i np. @ 
  isValidationRequiredFailed = false;
  isStudentAdded = false;
  studentAddedText = "";

  constructor(private studentService : StudentService){

  }

  save(name : string, email : string){
    this.isValidationRequiredFailed = false;

    if (!name || !email){
      this.isValidationRequiredFailed = true;
      return;
    }
    
    this.studentService.addStudent({name, email} as Student)
      .subscribe(student=>{
        console.log("Dodano studenta o id:" + student.id);
        this.isStudentAdded = true;
        this.studentAddedText = "Dodano studenta o id:" + student.id + ", imię i nazwisko: " + student.name;
      });
  }

}
