import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DoctorListingService } from "../Services/doctorlisting.service";
import { doctor_listing } from "../../app/model/doctor_listing.model";
import { SelectorMatcher } from "@angular/compiler";

@Component({
  selector: "app-doctor-listing",
  templateUrl: "./doctor-listing.component.html",
  styleUrls: ["./doctor-listing.component.css"],
})
export class DoctorListingComponent implements OnInit {
  doctor_listing: doctor_listing[];
  name: string;
  displayedColumns = [
    "name",
    "speciality",
    " degrees",
    "experience",
    " training",
  ];

  constructor(
    private doctorlistingService: DoctorListingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchdoctor_listing();
  }

  fetchdoctor_listing() {
    this.doctorlistingService
      .getDoctorListing()
      .subscribe((data: doctor_listing[]) => {
        this.doctor_listing = data;

        console.log(this.doctor_listing);
      });
  }

  Search() {
    this.doctor_listing = this.doctor_listing.filter((res) => {
      return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
