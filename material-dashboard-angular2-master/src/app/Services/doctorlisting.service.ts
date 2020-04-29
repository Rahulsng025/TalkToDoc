import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DoctorListingService {
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) {}

  //Services of Diagnostic Center.
  getDiagnosticcenter() {
    return this.http.get(`${this.uri}/diagnostic_center`);
  }

  getDiagnosticcenterById(Id: any) {
    return this.http.get(`${this.uri}/diagnostic_center/${Id}`);
  }

  addDiagnosticcenter(
    name: any,
    established_in: any,
    address: any,
    contact: any,
    landmark: any,
    website: any
  ) {
    const diagnosticcenter = {
      name: name,
      established_in: established_in,
      address: address,
      contact: contact,
      landmark: landmark,
      website: website,
    };
    return this.http.post(
      `${this.uri}/Diagnostic_center/add`,
      diagnosticcenter
    );
  }
  deleteDiagnosticcenter(_id: any) {
    return this.http.get("${this.uri}/Diagnostic_center/delete/${id}");
  }

  //Services Of Home Care.

  gethomecare() {
    return this.http.get(`${this.uri}/home_care`);
  }

  gethomecareById(Id: any) {
    return this.http.get(`${this.uri}/home_care/${Id}`);
  }

  addhomecare(title: any, address: any, state: any, country: any) {
    const homecare = {
      title: title,
      address: address,
      state: state,
      country: country,
    };
    return this.http.post(`${this.uri}/home_care/add`, homecare);
  }
  deletehomecare(_id: any) {
    return this.http.get("${this.uri}/home_care/delete/${id}");
  }

  //Services of Medical Insurance.

  getmedicalinsurance() {
    return this.http.get(`${this.uri}/medical_insurance`);
  }

  getmedicalinsuranceById(Id: any) {
    return this.http.get(`${this.uri}/medical_insurance/${Id}`);
  }

  addmedicalinsurance(title: any, country_name: any, description: any) {
    const medicalinsurance = {
      title: title,
      country_name: country_name,
      description: description,
    };
    return this.http.post(
      `${this.uri}/medical_insurance/add`,
      medicalinsurance
    );
  }
  deletemedicalinsurance(_id: any) {
    return this.http.get("${this.uri}/medical_insurance/delete/${id}");
  }
}
