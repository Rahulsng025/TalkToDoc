import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { DoctorDetailsModel } from "./../model/doctor_listing.model";

@Injectable({
  providedIn: "root",
})
export class DoctorListingService {
  // stores doctor's details.
  newDoctorDetails: DoctorDetailsModel;

  // URL to connect to the (node) server.
  // Change this to connect to the Cloud server.
  uri = "http://localhost:3000";

  // stores details for a new doctor which is to be added.
  addDoctorListing(newDoctorDetails: DoctorDetailsModel) {
    this.newDoctorDetails = newDoctorDetails;

    // API call to add a new doctor in the database.
    return this.http.post(
      "${this.uri}/Doctor_Listing/add",
      this.newDoctorDetails
    );
  }

  // returns a list of all the doctors.
  // return type is Observable.
  getDoctorsList() {
    return this.http.get(`${this.uri}/doctor_listing`);
  }

  // return type is Observable.
  getDoctorListingById(Id: any) {
    return this.http.get(`${this.uri}/doctor_listing/${Id}`);
  }

  // return type is Observable.
  deleteDoctorListing(_id: any) {
    return this.http.get("${this.uri}/Doctor_Listing/delete/${id}");
  }

  constructor(private http: HttpClient) {}
}
