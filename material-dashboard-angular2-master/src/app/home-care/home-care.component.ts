import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
//import { DoctorListingService } from '../Services/doctorlisting.service';
import { HomeCareModel } from "../../app/model/home_care.model";
import { HomeCareService } from "../Services/home-care.service";

@Component({
  selector: "app-home-care",
  templateUrl: "./home-care.component.html",
  styleUrls: ["./home-care.component.css"],
})
export class HomeCareComponent implements OnInit {
  allHomeCareDetails: HomeCareModel[];
  displayedColumns = ["title", "address", "state", "country"];

  constructor(
    private homecareService: HomeCareService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchhome_care();
  }

  fetchhome_care() {
    this.homecareService.gethomecare().subscribe((data: HomeCareModel[]) => {
      this.allHomeCareDetails = data;

      console.log(this.allHomeCareDetails);
    });
  }
}
