import { Injectable } from '@angular/core';
import { BookTestQueryModel } from 'app/model/book_test_query.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookTestQueryService {

  newBookTestQuery: BookTestQueryModel[];


  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getbooktestquery() {
    return this.http.get(`${this.uri}/booktestquery`);
  }

  getbooktestqueryId(Id: any) {
    return this.http.get(`${this.uri}/booktestquery/${Id}`);
  }

  postbooktestquery(_newBookTestDetails: BookTestQueryModel) {
    return this.http.post(`${this.uri}/booktestquery/`, _newBookTestDetails);
  }

  deletebooktestquery(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/booktestquery/${_id}`);
  }

}
