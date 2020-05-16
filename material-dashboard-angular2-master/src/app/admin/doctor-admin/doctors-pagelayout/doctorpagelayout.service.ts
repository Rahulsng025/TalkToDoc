import { Injectable, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DoctorDetailsModel } from "app/model/doctor_listing.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class doctorspagelayoutService {
  newDoctorDetails: DoctorDetailsModel[];

  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    speciality: new FormControl("", Validators.required),
    degrees: new FormControl("", Validators.required),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl("", Validators.email),
    training: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: "",
      department: "",
      speciality: "",
      degrees: "",
      mobile: "",
      email: "",
      training: "",
      city: "",
    });
  }

  getDoctorsList() {
    return this.http.get(`${this.uri}/doctor_listing`);
  }

  deleteDoctorListing(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/doctor_listing/${_id}`);
  }

  patchDoctorListing(newDoctorDetails: DoctorDetailsModel) {
    return this.http.patch(`${this.uri}/doctor_listing/`, newDoctorDetails);
  }

  addDoctorListing(newDoctorDetails: DoctorDetailsModel) {
    // API call to add a new doctor in the database.
    return this.http.post(`${this.uri}/doctor_listing/`, newDoctorDetails);
  }
}
