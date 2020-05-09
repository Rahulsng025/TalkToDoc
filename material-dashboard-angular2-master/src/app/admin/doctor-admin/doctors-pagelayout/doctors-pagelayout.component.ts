import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { doctorspagelayoutService } from "app/admin/doctor-admin/doctors-pagelayout/doctorpagelayout.service";
import { DoctorDetailsModel } from "app/model/doctor_listing.model";

@Component({
  selector: 'app-doctors-pagelayout',
  templateUrl: './doctors-pagelayout.component.html',
  styleUrls: ['./doctors-pagelayout.component.css']
})
export class DoctorsPagelayoutComponent implements OnInit {
  allDoctorDetails: DoctorDetailsModel[];
  doctorspagelayoutService: any;



  constructor(private service: doctorspagelayoutService, private router: Router) { }

  ngOnInit(): void {
    this.service.getDoctorsList();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }


  onSubmit() {
    if (this.service.form.valid) {
      this.service.addDoctorListing(this.service.form.value).subscribe((data: DoctorDetailsModel[]) => {
        this.allDoctorDetails = data;
        console.log(this.allDoctorDetails);
        this.router.navigate(['/admin/doctors']);
      });
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }




}
