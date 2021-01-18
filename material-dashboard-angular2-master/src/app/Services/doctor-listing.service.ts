import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";



import { DoctorDetailsModel } from "./../model/doctor_listing.model";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DoctorListingService {
  // stores doctor's details.
  selectedDoctors: DoctorDetailsModel;
  newDoctorDetails: DoctorDetailsModel[];



  // URL to connect to the (node) server.
  // Change this to connect to the Cloud server.
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }



  // stores details for a new doctor which is to be added.
  addDoctorListing(newDoctorDetails: DoctorDetailsModel) {
    // API call to add a new doctor in the database.
    return this.http.post(`/doctor_listing/`, this.newDoctorDetails);
  }


  // returns a list of all the doctors.
  // return type is Observable.
  getDoctorsList() {
    return this.http.get(`/doctor_listing`);

  }


  // return type is Observable.
  getDoctorListingById(Id: any) {
    return this.http.get(`/doctor_listing/${Id}`);
  }

  // return type is Observable.
  deleteDoctorListing(_id: string): Observable<any> {
    return this.http.delete(`/doctor_listing/${_id}`);
  }


}