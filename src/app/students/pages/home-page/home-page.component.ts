import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../model/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  students: Student[] = [];

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.load("/getAllStudents").subscribe(res =>{ this.students = res; });
  }

  goToDetails(toDetail: Student){
    console.log(toDetail);
    this.router.navigate([`/students/${toDetail.id}`])
  }

  onDeleteStudent(studentDelet: Student ){
    console.log(studentDelet);
    this.service.remove(`deleteById/${studentDelet.id}`).subscribe(res => console.log(res));
    window.location.reload();
    this.getAllStudents();
  }

  editStudent(studentEdit: Student){
    console.log(studentEdit);
    this.router.navigate([`/edit/${studentEdit.id}`])
  }
}
