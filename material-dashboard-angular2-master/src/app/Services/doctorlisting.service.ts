import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DiagnosticCenterModel } from "app/model/diagnostic_center.model";
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DoctorListingService {
  diagnostic_center: DiagnosticCenterModel[]

  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(""),
    established_in: new FormControl(""),
    address: new FormControl(""),
    contact: new FormControl("", Validators.maxLength(10)),
    landmark: new FormControl(""),
    website: new FormControl("", Validators.required),

  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      name: "",
      established_in: "",
      address: "",
      contact: "",
      landmark: "",
      website: ""
    });
  }





  //Services of Diagnostic Center.
  getDiagnosticcenter() {
    return this.http.get(`/diagnostic_center`);
  }

  getDiagnosticcenterById(Id: any) {
    return this.http.get(`/diagnostic_center/${Id}`);
  }

  addDiagnosticcenter(diagnostic_center: DiagnosticCenterModel) {
    return this.http.post(
      `/Diagnostic_center/`, diagnostic_center);
  }
  deleteDiagnosticcenter(_id: string): Observable<any> {
    return this.http.delete(`/Diagnostic_center/${_id}`);
  }

}
