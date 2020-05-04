import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeCareModel } from "./../model/home_care.model";


@Injectable({
  providedIn: 'root'
})
export class HomeCareService {

  newHomeCareDetails: HomeCareModel;

  uri = "http://localhost:3000";



  gethomecare() {
    return this.http.get(`${this.uri}/home_care`);
  }

  gethomecareById(Id: any) {
    return this.http.get(`${this.uri}/home_care/${Id}`);
  }

  addhomecare(title: any, address: any, state: any, country: any) {
    const newHomeCareDetails = {
      title: title,
      address: address,
      state: state,
      country: country,
    };
    return this.http.post(`${this.uri}/home_care/add`, newHomeCareDetails);
  }
  deletehomecare(_id: any) {
    return this.http.get("${this.uri}/home_care/delete/${id}");
  }

  constructor(private http: HttpClient) { }
}