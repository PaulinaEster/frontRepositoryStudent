import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Student } from '../../model/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = { name: "", email: "", description: "", department: { departmentName: "", location: "" }, subjects: [] };

  constructor(private service: StudentService, private router: Router) { }

  ngOnInit(): void {
  }
  
  onCreateNewStudent(student: Student){
    console.log(student);
    this.service.create(student).subscribe(res => {console.log(res)});
    this.router.navigate(['']);
  }

}
