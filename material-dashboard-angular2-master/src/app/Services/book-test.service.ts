import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { BookTestModel } from "app/model/book_test.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookTestService {
  newBookTest: BookTestModel[];



  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getbooktest() {
    return this.http.get(`${this.uri}/book_test`);
  }

  getbooktestbuId(Id: any) {
    return this.http.get(`${this.uri}/book_test/${Id}`);
  }

  postbooktest(_newBookTest: BookTestModel) {
    return this.http.post(`${this.uri}/book_test/`, _newBookTest);
  }

  deletebooktest(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/book_test/${_id}`);
  }



}
