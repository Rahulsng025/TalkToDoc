import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactModel } from 'app/model/contact.model';
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  updatevalue(value: any) {
    throw new Error("Method not implemented.");
  }
  UpdateValue(value: any) {
    throw new Error("Method not implemented.");
  }
  updateValue(value: any) {
    throw new Error("Method not implemented.");
  }

  newContactDetails: ContactModel[];

  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    email: new FormControl("", Validators.required),
    message: new FormControl("", Validators.required)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: '',
      email: '',
      message: '',

    });
  }


  getcontact() {
    return this.http.get(`${this.uri}/contact`);
  }

  deletecontact(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/contact/${_id}`);
  }
  postcontact(newContactDetails: ContactModel) {
    // API call to add a new doctor in the database.
    return this.http.post(`${this.uri}/contact/`, newContactDetails);
  }
}

