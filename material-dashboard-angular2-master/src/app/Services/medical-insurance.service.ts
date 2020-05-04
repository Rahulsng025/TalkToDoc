import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { MedicalInsuranceModel } from "../model/medical_insurance.model";

@Injectable({
  providedIn: 'root'
})
export class MedicalInsuranceService {

  newMedicalInsuranceDetails: MedicalInsuranceModel;

  uri = "http://localhost:3000";


  getmedicalinsurance() {
    return this.http.get(`${this.uri}/medical_insurance`);
  }

  getmedicalinsuranceById(Id: any) {
    return this.http.get(`${this.uri}/medical_insurance/${Id}`);
  }

  addmedicalinsurance(title: any, country_name: any, description: any) {
    const newMedicalInsuranceDetails = {
      title: title,
      country_name: country_name,
      description: description,
    };
    return this.http.post(
      `${this.uri}/medical_insurance/add`,
      newMedicalInsuranceDetails
    );
  }
  deletemedicalinsurance(_id: any) {
    return this.http.get("${this.uri}/medical_insurance/delete/${id}");
  }
  constructor(private http: HttpClient) { }
}
