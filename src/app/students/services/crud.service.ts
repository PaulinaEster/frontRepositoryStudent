import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CRUDService<T> {

  constructor(private http: HttpClient, private API_URL: String) { }

  load(url: String){
    return this.http.get<T[]>(`${this.API_URL}${url}`); 
  }

  getOneItem(url: String){
    return this.http.get<T>(`${this.API_URL}${url}`); 
  }

  create(record: T){
    return this.http.post<T>(this.API_URL + '/create', record);
  }

  update(record: T, id: String){
    return this.http.put<T>(`${this.API_URL}/${id}`, record);
  }

  remove(id: String){
    return this.http.delete<T>(`${this.API_URL}/${id}`);
  }

}
