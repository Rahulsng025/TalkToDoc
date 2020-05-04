import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DoctorListingService {
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

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



  //Services of Medical Insurance.


}
