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
import { DetailsStudentComponent } from './details-student/details-student.component';
import { HeaderDetailsStudentComponent } from './header-details-student/header-details-student.component';
import { ContentDetailsStudentComponent } from './content-details-student/content-details-student.component';
import { ButtonsDetailsStudentComponent } from './buttons-details-student/buttons-details-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    NavigationComponent,
    FooterComponent,
    CustomPipe,
    EditStudentComponent,
    DetailsStudentComponent,
    HeaderDetailsStudentComponent,
    ContentDetailsStudentComponent,
    ButtonsDetailsStudentComponent
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
