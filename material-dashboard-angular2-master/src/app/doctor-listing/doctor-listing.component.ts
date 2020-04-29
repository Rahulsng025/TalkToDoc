import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { DoctorListingService } from "../Services/doctor-listing.service";
import { DoctorDetailsModel } from "../../app/model/doctor_listing.model";

@Component({
  selector: "app-doctor-listing",
  templateUrl: "./doctor-listing.component.html",
  styleUrls: ["./doctor-listing.component.css"],
})
export class DoctorListingComponent implements OnInit, OnDestroy {
  allDoctorDetails: DoctorDetailsModel[];
  doctorListingSubscription: Subscription;

  name: string;
  displayedColumns = [
    "name",
    "speciality",
    " degrees",
    "experience",
    " training",
  ];

  // fetch a list of all doctors with all of their details.
  fetchDoctorsList() {
    this.doctorListingSubscription = this.doctorlistingService
      .getDoctorsList()
      .subscribe((doctorsList: DoctorDetailsModel[]) => {
        this.allDoctorDetails = doctorsList;
      });
  }

  // searching a particular doctor from the fetched list.
  Search() {
    this.allDoctorDetails = this.allDoctorDetails.filter((res) => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }

  constructor(private doctorlistingService: DoctorListingService) {}

  // Load a list of all doctors whenever this component is visited.
  ngOnInit(): void {
    this.fetchDoctorsList();
  }

  // Unsubscribe the doctor-listing service when component is not in use.
  ngOnDestroy(): void {
    this.doctorListingSubscription.unsubscribe();
  }
}
