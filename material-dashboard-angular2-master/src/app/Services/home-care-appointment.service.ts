import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HomeCareModel } from "./../model/home_care.model";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HomeCareAppointmentModel } from "app/model/home_care_appointment";

@Injectable({
  providedIn: 'root'
})
export class HomeCareAppointmentService {

  newHomeCareAppointmentDetails: HomeCareAppointmentModel;


  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    number: new FormControl("", Validators.required),
    howsoon: new FormControl("", Validators.required),
    forwhom: new FormControl("", Validators.required),
    frequency: new FormControl("", Validators.required),

  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: "",
      gender: "",
      email: "",
      age: "",
      number: "",
      howsoon: "",
      forwhom: "",
      frequency: ""
    });
  }
  gethomecareappointment() {
    return this.http.get(`/home_care_appointment`);
  }
  gethomecareappointmentById(Id: any) {
    return this.http.get(`/home_care_appointment/${Id}`);
  }

  addhomecareappointment(_newHomeCareAppointmentDetails: HomeCareModel) {
    return this.http.post(`/home_care_appointment/`, _newHomeCareAppointmentDetails);
  }

  deletehomecareappointment(_id: string): Observable<any> {
    return this.http.delete(`/home_care_appointment/${_id}`);
  }


}
