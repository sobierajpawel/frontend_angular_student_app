import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DetailsStudentComponent } from './details-student/details-student.component';

const routes: Routes = [
  { path: "students", component: StudentListComponent },
  { path: "add-student", component: CreateStudentComponent },
  { path: "edit-student/:id", component: EditStudentComponent},
  { path: "detail-student/:id", component: DetailsStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
