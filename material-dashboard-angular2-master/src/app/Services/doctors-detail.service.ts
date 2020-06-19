
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { DoctorDetailsModel } from "../../app/model/doctor_listing.model";

@Injectable({
  providedIn: 'root'
})
export class DoctorsDetailService {
  doctorToShow: DoctorDetailsModel;
  tracker = new Subject<DoctorDetailsModel>();

  constructor() { }

  getDoctorDetails() {
    return this.doctorToShow;
  }

  test(value: DoctorDetailsModel) {
    console.log('Value sent to Service:');
    console.log(value);
    this.doctorToShow = value;
  }
}