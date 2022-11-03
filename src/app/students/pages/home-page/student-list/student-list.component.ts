import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/students/model/Student'; 
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() student!: Student;

  @Output() detailsItem = new EventEmitter<Student>();
  @Output() deleteItemEvent = new EventEmitter<Student>();
  @Output() editItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goToDetails(){
    this.detailsItem.emit();
  }

  onDeleteStudent(){ 
    this.deleteItemEvent.emit();
  }

  goToEdit(){
    this.editItemEvent.emit();
  } 
}
