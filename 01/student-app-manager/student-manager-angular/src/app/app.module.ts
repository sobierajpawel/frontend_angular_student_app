import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { CustomPipe } from './custom.pipe';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    NavigationComponent,
    FooterComponent,
    CustomPipe,
    EditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
