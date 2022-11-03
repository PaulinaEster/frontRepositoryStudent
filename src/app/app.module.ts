import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './students/pages/home-page/home-page.component';
import { StudentListComponent } from './students/pages/home-page/student-list/student-list.component';
import { StudentDetailsComponent } from './students/pages/student-details/student-details.component';
import { StudentCreateComponent } from './students/pages/student-create/student-create.component';
import { StudentEditComponent } from './students/pages/student-edit/student-edit.component';
import { FormComponent } from './students/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentListComponent,
    StudentDetailsComponent,
    StudentCreateComponent,
    StudentEditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
