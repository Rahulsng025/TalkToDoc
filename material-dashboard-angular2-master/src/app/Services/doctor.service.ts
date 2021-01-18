import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DoctorRegistrationModel } from 'app/model/doctor_registration.model';
import { Observable } from "rxjs";

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
    return this.http.get(`/doctors`);
  }

  deletedoctors(_id: string): Observable<any> {
    return this.http.delete(`/doctors/${_id}`);
  }
}
