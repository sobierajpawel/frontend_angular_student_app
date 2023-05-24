import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  // 1) Napisanie żądania typu PUT na serwer -> aktualizuj dane
  // 2) Obsługa przycisku zapisz na tym formularzu
  // 3) Informacja dla użytkowników o tym co się dzieje -> zapis/sukces.
  // ts->html->ts
  student! : Student;

  constructor(private studentService : StudentService,
    private activedRoute : ActivatedRoute){

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
}
