import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../model/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = { name: "", email: "", description: "", department: { departmentName: "", location: "" }, subjects: [] };

  constructor(private router: Router, private route: ActivatedRoute, private service: StudentService) { }

  ngOnInit(): void {
    this.getEditingStudent();
  }

  getEditingStudent(){
    let id = String(this.route.snapshot.paramMap.get("id")); 
    this.service.getOneItem(`/getById/${id}`).subscribe((res) => { this.student = res });  
  }

  onCancelEdit(){
    this.router.navigate(['students']);
  }
}
