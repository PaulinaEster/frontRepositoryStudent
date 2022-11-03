import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './students/pages/home-page/home-page.component';
import { StudentCreateComponent } from './students/pages/student-create/student-create.component';
import { StudentDetailsComponent } from './students/pages/student-details/student-details.component';
import { StudentEditComponent } from './students/pages/student-edit/student-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: HomePageComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'create', component: StudentCreateComponent },
  { path: 'edit/:id', component: StudentEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
