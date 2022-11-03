import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../../model/Student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  student: Student = { name: "", email: "", description: "", department: { departmentName: "", location: "" }, subjects: [] };

  style = { type: 'danger' };

  constructor(private router: Router, private route: ActivatedRoute, private service: StudentService) { }

  ngOnInit(): void {
    let id = String(this.route.snapshot.paramMap.get("id")); 
    this.service.getOneItem(`/getById/${id}`).subscribe((res) => { this.student = res });  
  }

  getStyle(mark: Number): String{
    return  mark < 25 ? 'danger' : mark < 50 ? 'warning' : mark < 75 ? 'info' : 'success';
  }

}
