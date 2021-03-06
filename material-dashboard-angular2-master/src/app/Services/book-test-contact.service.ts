import { Injectable } from '@angular/core';
import { BookTestContactModel } from 'app/model/book_test_contact.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookTestContactService {

  newBookTestContact: BookTestContactModel[];

  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getbooktestcontact() {
    return this.http.get(`/booktestcontact`);
  }

  getbooktestcontactId(Id: any) {
    return this.http.get(`/booktestcontact/${Id}`);
  }

  postbooktestcontact(_newBookTestContact: BookTestContactModel) {
    return this.http.post(`/booktestcontact/`, _newBookTestContact);
  }

  deletebooktestcontact(_id: string): Observable<any> {
    return this.http.delete(`/booktestcontact/${_id}`);
  }
}
