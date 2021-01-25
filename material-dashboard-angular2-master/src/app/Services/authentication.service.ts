import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { UserRegistrationModel } from 'app/model/user_registration.model'
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  env = environment;
  authToken: any;
  role: string;

  allUserRegistrationDetails: UserRegistrationModel[];

  constructor(private http: Http) { }

  //For user registration

  registerUser(data: { name: String; number: String; gender: String; email: String; username: String; password: String; }, role: string) {
    console.log('******' + role); 
    return this.http.post(`${role}/register`, data)
      .map(res => res.json());
  }

  //For user and doctor both registration


  //For user authentication

  authenticateUser(data: { username: String; password: String; }, role: string) {
    console.log('Auth User called');
    return this.http.post(`${role}/authenticate`, data)
      .map(res => res.json());
  }

  //For doctor authentication


  //For users profile
  getProfile(role) {
    this.loadToken();
    return this.http.get(`${role}/profile`)
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


