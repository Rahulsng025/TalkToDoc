import { Component, OnInit } from '@angular/core';
import { DoctorDetailsModel } from "app/model/doctor_listing.model";
import { DoctorsDetailService } from "app/Services/doctors-detail.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor: DoctorDetailsModel;


  constructor(private doctorsdetailService: DoctorsDetailService, private router: Router) { }

  ngOnInit(): void {
    this.doctor = this.doctorsdetailService.getDoctorDetails();
  }
  onLoadPage() {
    this.router.navigate(['main/appointment-list']);
  }

}