import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorRegistrationModel } from 'app/model/doctor_registration.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  //Model class of user registration.
  allDoctorRegistrationDetails: DoctorRegistrationModel[];

  //Api server port uri.
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getdoctors() {
    return this.http.get(`${this.uri}/doctors`);
  }
}
