import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-reactive-create-student',
  templateUrl: './reactive-create-student.component.html',
  styleUrls: ['./reactive-create-student.component.css']
})
export class ReactiveCreateStudentComponent {
  isSuccess : boolean = false;
  addStudentForm = this.formBuilder.group({
    name : ['',[Validators.required, Validators.minLength(5)]],
    email : ['',[Validators.required, Validators.email]],
    phone : ['',[Validators.pattern("[5-8]{1}[0-9]{8}")]],
  });
  //TODO!
  // 1) Wysłać żądanie POST na serwer i powiadomic użytkownik

  constructor(private formBuilder : FormBuilder, private studentService : StudentService){
  }

  get controls(){
    return this.addStudentForm.controls;
  }

  addStudent(){
    if (this.addStudentForm.invalid){
      return;
    }

    this.studentService.addStudent({name: this.controls.name.value,
      email: this.controls.email.value, phone: this.controls.phone.value} as Student)
      .subscribe(()=>{
        console.log("Dodano studenta!");
        this.isSuccess = true;
      })
  }
}
