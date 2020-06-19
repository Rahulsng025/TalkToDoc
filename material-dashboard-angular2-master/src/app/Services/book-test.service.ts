import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { BookTestModel } from "app/model/book_test.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookTestService {
  updateFormValue(form: FormGroup) {
    throw new Error("Method not implemented.");
  }
  newBookTestDetails: BookTestModel[];



  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormGroup(null),
    patient_name: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    number: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    locality: new FormControl("", Validators.required),
    pincode: new FormControl("", Validators.required),
    home_address: new FormControl("", Validators.required),
    landmark: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      patient_name: "",
      age: "",
      gender: "",
      number: "",
      locality: "",
      pincode: "",
      home_address: "",
      landmark: "",
      date: "",
    });
  }




  getbooktest() {
    return this.http.get(`${this.uri}/book_test`);
  }

  getbooktestbuId(Id: any) {
    return this.http.get(`${this.uri}/book_test/${Id}`);
  }

  postbooktest(_newBookTestDetails: BookTestModel) {
    return this.http.post(`${this.uri}/book_test/`, _newBookTestDetails);
  }

  deletebooktest(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/book_test/${_id}`);
  }



}
