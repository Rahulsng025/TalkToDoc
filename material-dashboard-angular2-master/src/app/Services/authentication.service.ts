import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { tokenNotExpired } from 'angular2-jwt';
import { UserRegistrationModel } from 'app/model/user_registration.model'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authToken: any;
  role: string;

  allUserRegistrationDetails: UserRegistrationModel[];

  uri = "http://localhost:3000";



  constructor(private http: Http) { }

  //For user registration

  registerUser(data: { name: String; number: String; gender: String; email: String; username: String; password: String; }, role: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log('******' + role);
    return this.http.post(  + role + '/register', data, { headers: headers })
      .map(res => res.json());
  }

  //For user and doctor both registration





  //For user authentication

  authenticateUser(data: { username: String; password: String; }, role: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post( + role + '/authenticate', data, { headers: headers })
      .map(res => res.json());
  }

  //For doctor authentication


  //For users profile
  getProfile(role) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(  + role + '/profile', { headers: headers })
      .map(res => res.json());
  }


  //For user storage
  storeData(token, data) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(data));
    this.authToken = token;
    this.role = data;
  }



  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout() {
    this.authToken = null;
    this.role = null;
    localStorage.clear();
  }



}


