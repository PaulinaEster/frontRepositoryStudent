import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from '../model/Student';
import { Subject } from '../model/Subject';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() getEditingStudentEvent = new EventEmitter<Student>();
  @Output() onCancelEditEvent = new EventEmitter<string>();
  @Output() onCreateNewStudent = new EventEmitter<Student>();

  @Input() student: Student = { name: "", email: "", description: "", department: { departmentName: "", location: "" }, subjects: [] };
  isEdit = false;

  formGeral = this.fb.group({
    name: ["", [Validators.required]],
    email: ["teste", [Validators.required, Validators.email]]
  });
  departmentForm = this.fb.group({
    departmentName: ["", [Validators.required]],
    location: ["", [Validators.required]]
  });
  subjectForm = this.fb.group({
    subjectName: ["", [Validators.required]],
    marksObtained: [0,  [Validators.required, Validators.min(0), Validators.max(100)]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.student);
    if (this.student.name.length > 0) {
      this.isEdit = true;
      console.log(this.isEdit);
      this.getEditingStudentEvent.emit;
      if(this.student.name.length > 0){
        console.log(this.student, 'aqui');
      }
    };
  }

  onCancelEdit() {
    this.onCancelEditEvent.emit; 
  }

  getSubjectItemDelete( i: Number){
    this.student.subjects = this.student.subjects.filter((sub, index) => index != i);
  }

  addSubjectItem(){ 
    let name = this.subjectForm.value.subjectName!;
    let marks = this.subjectForm.value.marksObtained!; 
    if(this.subjectForm.valid){
      this.student.subjects.push( {subjectName: name, marksObtained: marks });
    }
  }

  onSendForm(){ 

    if(this.formGeral.valid && this.departmentForm.valid){ 
      let depName = this.departmentForm.value.departmentName!;
      let location = this.departmentForm.value.location!;
      let name = this.formGeral.value.name!;
      let email = this.formGeral.value.email!;
      this.student = { name: name, email: email, department: { departmentName: depName, location: location }, subjects: this.student.subjects };
      this.onCreateNewStudent.emit(this.student);
    } 
  }


}
