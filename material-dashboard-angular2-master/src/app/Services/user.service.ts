import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistrationModel } from 'app/model/user_registration.model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Model class of user registration.
  allUserRegistrationDetails: UserRegistrationModel[];

  //Api server port uri.
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getusers() {
    return this.http.get(`${this.uri}/users`);
  }

  deleteusers(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/users/${_id}`);
  }
}