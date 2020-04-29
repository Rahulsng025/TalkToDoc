import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { AppointmentDetailsModel } from "app/model/appointment_list.model";

@Injectable({
  providedIn: "root",
})
export class AppointmentListingService {
  // stores information about all appointments.
  bookedAppointment: AppointmentDetailsModel[];

  // URL to connect to the (node) server.
  // Change this to connect to the Cloud server.
  uri = "http://localhost:3000";

  getbookappointment(): Observable<AppointmentDetailsModel[]> {
    return this.http.get<AppointmentDetailsModel[]>(
      `${this.uri}/book_appointment`
    );
  }
  getbookappointmentById(Id: any): Observable<AppointmentDetailsModel[]> {
    return this.http.get<AppointmentDetailsModel[]>(
      `${this.uri}/book_appointment/${Id}`
    );
  }
  addbookappointment(newAppointment: AppointmentDetailsModel) {
    return this.http.post(`${this.uri}/book_appointment/`, newAppointment);
  }

  //
  deletebookappointment(_id: string): Observable<any> {
    console.log("Passing ID (in Service): " + _id);
    return this.http.delete(`${this.uri}/book_appointment/${_id}`);
  }

  constructor(private http: HttpClient) { }
}
