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

  newBookTestDetails: BookTestModel[];




  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    patient_name: new FormControl("", Validators.required),
    gender: new FormControl("", Validators.required),
    age: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    test: new FormControl("", Validators.required),
    number: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
    ]),
    home_address: new FormControl("", Validators.required),
    locality: new FormControl("", Validators.required),
    pincode: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    time: new FormControl("", Validators.required),
    date: new FormControl("", Validators.required),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      patient_name: "",
      age: "",
      email: "",
      test: "",
      gender: "",
      number: "",
      locality: "",
      pincode: "",
      home_address: "",
      city: "",
      time: "",
      date: "",
    });
  }




  getbooktest() {
    return this.http.get(`/book_test`);
  }

  getbooktestbuId(Id: any) {
    return this.http.get(`/book_test/${Id}`);
  }

  postbooktest(_newBookTestDetails: BookTestModel) {
    return this.http.post(`/book_test/`, _newBookTestDetails);
  }

  deletebooktest(_id: string): Observable<any> {
    return this.http.delete(`/book_test/${_id}`);
  }



}
