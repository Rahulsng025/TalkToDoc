import { Injectable } from '@angular/core';
import { BookTestQueryModel } from 'app/model/book_test_query.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BookTestQueryService {

  newBookTestQuery: BookTestQueryModel;


  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getbooktestquery() {
    return this.http.get(`/booktestquery`);
  }

  getbooktestqueryId(Id: any) {
    return this.http.get(`/booktestquery/${Id}`);
  }

  postbooktestquery(newBookTestDetails: BookTestQueryModel) {
    console.log('Sending POST request..');
    console.log(newBookTestDetails);
    return this.http.post(`/booktestquery/`, newBookTestDetails);
  }

  deletebooktestquery(_id: string): Observable<any> {
    return this.http.delete(`/booktestquery/${_id}`);
  }

}
