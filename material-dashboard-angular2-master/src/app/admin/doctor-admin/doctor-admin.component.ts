import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DoctorListingService } from "app/Services/doctor-listing.service";
import { DoctorDetailsModel } from "app/model/doctor_listing.model";
import { mergeMap } from "rxjs/operators";


@Component({
  selector: 'app-doctor-admin',
  templateUrl: './doctor-admin.component.html',
  styleUrls: ['./doctor-admin.component.css']
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
    "cancel"
  ];



  constructor(private doctorlistingService: DoctorListingService, private router: Router) { }

  ngOnInit(): void {
    this.fetchDoctorList();

  }

  fetchDoctorList() {
    this.doctorlistingService.getDoctorsList()
      .subscribe((doctorList: DoctorDetailsModel[]) => {
        this.allDoctorDetails = doctorList;
      });
  }
  deleteDoctorListing(id: string) {

    console.log('ID: ' + id);

    this.doctorlistingService.deleteDoctorListing(id)
      .pipe(
        mergeMap(() => this.doctorlistingService.getDoctorsList())
      )
      .subscribe((allDoctorDetails: DoctorDetailsModel[]) => {

        console.log(`Data received`);
        console.log(allDoctorDetails);


        this.allDoctorDetails = allDoctorDetails;

      });

  }
  // onSearchClear() {
  //   this.searchKey = "";
  //   this.applyFilter();

  // applyFilter() {
  //   this.allDoctorDetails.filter = this.searchKey.trim().toLowerCase();
  // }
}
