import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { DoctorListingService } from "app/Services/doctor-listing.service";
import { DoctorDetailsModel } from "app/model/doctor_listing.model";
import { mergeMap } from "rxjs/operators";
import { MatDialog } from "@angular/material/dialog";
import { MatDialogConfig } from "@angular/material/dialog";
import { doctorspagelayoutService } from "./doctors-pagelayout/doctorpagelayout.service";
import { DoctorsPagelayoutComponent } from "./doctors-pagelayout/doctors-pagelayout.component";

@Component({
  selector: "app-doctor-admin",
  templateUrl: "./doctor-admin.component.html",
  styleUrls: ["./doctor-admin.component.css"],
})
export class DoctorAdminComponent implements OnInit {
  allDoctorDetails: DoctorDetailsModel[];

  searchKey: string;

  displayedColumns = [
    "name",
    "department",
    "speciality",
    "degrees",
    "mobile",
    "email",
    "training",
    "city",
    "action",
  ];

  constructor(
    public doctorlistingService: DoctorListingService,
    public router: Router,
    public dialog: MatDialog,
    public service: doctorspagelayoutService
  ) { }

  ngOnInit(): void {
    this.fetchDoctorList();
  }

  fetchDoctorList() {
    this.doctorlistingService
      .getDoctorsList()
      .subscribe((doctorList: DoctorDetailsModel[]) => {
        this.allDoctorDetails = doctorList;
      });
  }
  deleteDoctorListing(id: string) {
    console.log("ID: " + id);

    this.doctorlistingService
      .deleteDoctorListing(id)
      .pipe(mergeMap(() => this.doctorlistingService.getDoctorsList()))
      .subscribe((allDoctorDetails: DoctorDetailsModel[]) => {
        console.log(`Data received`);
        console.log(allDoctorDetails);

        this.allDoctorDetails = allDoctorDetails;
      });
  }

  onSearchClear() {
    this.searchKey = "";
    //   this.applyFilter();
  }
  // applyFilter() {
  //   this.allDoctorDetails.filter = this.searchKey.trim().toLowerCase();
  //  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DoctorsPagelayoutComponent, dialogConfig);
  }


}
