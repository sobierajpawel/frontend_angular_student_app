import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-details-student',
  templateUrl: './buttons-details-student.component.html',
  styleUrls: ['./buttons-details-student.component.css']
})
export class ButtonsDetailsStudentComponent {
  @Output() onBackClicked = new EventEmitter();
  @Output() onEditClicked = new EventEmitter();

  backClick(){
    this.onBackClicked.emit();
  }

  editClick(){
    this.onEditClicked.emit();
  }
}
