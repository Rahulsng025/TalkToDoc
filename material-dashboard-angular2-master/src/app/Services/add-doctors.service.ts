import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AddDoctorsModel } from "app/model/add_doctors.model";

@Injectable({
  providedIn: 'root'
})
export class AddDoctorsService {
  updateValue(value: any) {
    throw new Error("Method not implemented.");
  }

  newdoctorsDetails: AddDoctorsModel[];

  uri = "http://localhost:3000";


  constructor(private http: HttpClient) { }


  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl("", Validators.required),
    certificate: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    speciality: new FormControl("", Validators.required),
    degrees: new FormControl("", Validators.required),
    training: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: "",
      gender: "",
      mobile: "",
      email: "",
      certificate: "",
      department: "",
      speciality: "",
      degrees: "",
      training: "",
      city: ""
    });
  }

  getadddoctors(): Observable<AddDoctorsModel[]> {
    return this.http.get<AddDoctorsModel[]>(
      `/add_doctors`
    );
  }
  getadddoctorsById(Id: any): Observable<AddDoctorsModel[]> {
    return this.http.get<AddDoctorsModel[]>(
      `/add_doctors/${Id}`
    );
  }
  addadddoctors(newdoctorsDetails: AddDoctorsModel) {
    return this.http.post(`/add_doctors/`, newdoctorsDetails);
  }


  deleteadddoctors(_id: string): Observable<any> {
    return this.http.delete(`/add_doctors/${_id}`);
  }


}
