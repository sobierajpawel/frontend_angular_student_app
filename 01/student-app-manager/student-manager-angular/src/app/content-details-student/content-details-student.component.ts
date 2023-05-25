import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-details-student',
  templateUrl: './content-details-student.component.html',
  styleUrls: ['./content-details-student.component.css']
})
export class ContentDetailsStudentComponent {
  @Input() name = "";
  @Input() email = "";
  @Input() username = "";
  @Input() website = "";
  @Input() phone = "";
}
