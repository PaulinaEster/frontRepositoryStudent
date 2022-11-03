import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/Student';
import { CRUDService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends CRUDService<Student> {

  constructor(http: HttpClient) {
    let url_base ="http://localhost:8080/api/student";
    super(http, url_base)
  }
}
