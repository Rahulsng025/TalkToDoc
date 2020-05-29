import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";


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

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fname: new FormControl("", Validators.required),
    lname: new FormControl("", Validators.required),
    gender: new FormControl(""),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    address: new FormControl(""),
    email: new FormControl("", Validators.email),
    dateofbirth: new FormControl(""),
    consultingdoctor: new FormControl("", Validators.required),
    dateofappointment: new FormControl("", Validators.required),
    timeofappointment: new FormControl("", Validators.required),
    injury: new FormControl("")
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fname: '',
      lname: '',
      gender: '',
      mobile: '',
      address: '',
      email: '',
      dateofbirth: '',
      consultingdoctor: '',
      dateofappointment: '',
      timeofappointment: '',
      injury: ''
    });
  }

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


  deletebookappointment(_id: string): Observable<any> {
    console.log("Passing ID (in Service): " + _id);
    return this.http.delete(`${this.uri}/book_appointment/${_id}`);
  }



}
