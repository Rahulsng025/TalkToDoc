import { Component, OnInit } from '@angular/core';
import { DoctorDetailsModel } from "app/model/doctor_listing.model";
import { DoctorsDetailService } from "app/Services/doctors-detail.service";


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctor: DoctorDetailsModel;
  serverID: number = 10;
  serverStatus: string = 'Online';


  constructor(private doctorsdetailService: DoctorsDetailService) { }

  ngOnInit(): void {

    this.doctorsdetailService.getDoctor().subscribe((doctordetail: DoctorDetailsModel) => {


      this.doctor = doctordetail

    });
  }




}
