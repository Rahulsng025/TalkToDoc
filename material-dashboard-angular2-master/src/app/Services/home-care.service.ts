import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HomeCareModel } from "./../model/home_care.model";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class HomeCareService {
  newHomeCareDetails: HomeCareModel;

  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    country: new FormControl("", Validators.required),

  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      title: "",
      address: "",
      state: "",
      country: "",
    });
  }

  gethomecare() {
    return this.http.get(`${this.uri}/home_care`);
  }

  gethomecareById(Id: any) {
    return this.http.get(`${this.uri}/home_care/${Id}`);
  }

  addhomecare(_newHomeCareDetails: HomeCareModel) {
    return this.http.post(`${this.uri}/home_care/`, _newHomeCareDetails);
  }

  deletehomecare(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/home_care/${_id}`);
  }


}
