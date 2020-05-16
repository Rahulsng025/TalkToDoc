import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { MedicalInsuranceModel } from "app/model/medical_insurance.model"
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators } from "@angular/forms";




@Injectable({
  providedIn: 'root'
})
export class MedicalInsuranceService {

  allMedicalInsuranceDetails: MedicalInsuranceModel;

  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl("", Validators.required),
    country_name: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),


  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      title: "",
      country_name: "",
      description: "",

    });
  }




  getmedicalinsurance() {
    return this.http.get(`${this.uri}/medical_insurance`);
  }

  getmedicalinsuranceById(Id: any) {
    return this.http.get(`${this.uri}/medical_insurance/${Id}`);
  }

  addmedicalinsurance(allMedicalInsuranceDetails: MedicalInsuranceModel) {
    return this.http.post(`${this.uri}/medical_insurance/`, allMedicalInsuranceDetails);
  }
  deletemedicalinsurance(_id: string): Observable<any> {
    return this.http.delete(`${this.uri}/medical_insurance/${_id}`);
  }

}
