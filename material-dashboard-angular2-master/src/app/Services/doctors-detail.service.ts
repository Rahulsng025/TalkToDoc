import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { DoctorDetailsModel } from "../../app/model/doctor_listing.model";

@Injectable({
  providedIn: 'root'
})
export class DoctorsDetailService {

  doctor: DoctorDetailsModel;

  tracker = new Subject<DoctorDetailsModel>();

  constructor() { }

  getDoctor() {

    return this.tracker.asObservable();

  }
  showDoctor(doctorDetail: DoctorDetailsModel) {
    this.doctor = doctorDetail;
    this.tracker.next(this.doctor);

  }
}