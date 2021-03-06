import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialogRef } from "@angular/material/dialog";

import { doctorspagelayoutService } from "app/admin/doctor-admin/doctors-pagelayout/doctorpagelayout.service";
import { DoctorDetailsModel } from "app/model/doctor_listing.model";
import { DoctorListingService } from "app/Services/doctor-listing.service";

@Component({
  selector: "app-doctors-pagelayout",
  templateUrl: "./doctors-pagelayout.component.html",
  styleUrls: ["./doctors-pagelayout.component.css"],
})
export class DoctorsPagelayoutComponent implements OnInit {
  allDoctorDetails: DoctorDetailsModel[];
  doctorspagelayoutService: any;

  constructor(
    public service: doctorspagelayoutService,
    public router: Router,
    public dialogRef: MatDialogRef<DoctorsPagelayoutComponent>,
    doctorlistingService: DoctorListingService
  ) {}

  ngOnInit(): void {
    this.service.getDoctorsList();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service
        .addDoctorListing(this.service.form.value)
        .subscribe((data: DoctorDetailsModel[]) => {
          this.router.navigate(["/admin/doctors"]);
          this.service.form.reset();
          this.service.initializeFormGroup();
        });
    } else {
      this.service
        .patchDoctorListing(this.service.form.value)
        .subscribe((data: DoctorDetailsModel[]) => {
          this.router.navigate(["/admin/doctors"]);
          this.service.form.reset();
          this.service.initializeFormGroup();
          this.onClose();
        });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
