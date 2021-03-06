import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";


import { DoctorListingService } from "../Services/doctor-listing.service";
import { DoctorDetailsModel } from "../../app/model/doctor_listing.model";
import { DoctorsDetailService } from "app/Services/doctors-detail.service"
import { collectExternalReferences } from "@angular/compiler";
import { AuthenticationService } from "app/Services/authentication.service"

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
    "department",
    "speciality",
    " degrees",
    "mobile",
    "email",
    " training",
    "city",
    "profile",
    "image"
  ];
  speciality: string;
  city: string;

  // fetch a list of all doctors with all of their details.
  fetchDoctorsList() {
    this.doctorListingSubscription = this.doctorlistingService
      .getDoctorsList()
      .subscribe((doctorsList: DoctorDetailsModel[]) => {
        this.allDoctorDetails = doctorsList;

        // debugging.
        console.log('Sender: ');
        console.log(doctorsList);
      });
  }

  // searching a particular doctor from the list.
  onSubmit(_Searchbyname: () => void, _Searchbyspeciality: () => void, _Searchbycity: () => void) { }
  Searchbyname() {
    if (this.name != "") {
      this.allDoctorDetails = this.allDoctorDetails.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    } else if (this.name == "") {
      this.ngOnInit();
    }
  }
  Searchbyspeciality() {
    if (this.speciality != "") {
      this.allDoctorDetails = this.allDoctorDetails.filter(res => {
        return res.speciality.toLocaleLowerCase().match(this.speciality.toLocaleLowerCase());
      });
    } else if (this.speciality == "") {
      this.ngOnInit();
    }

  }
  Searchbycity() {
    if (this.city != "") {
      this.allDoctorDetails = this.allDoctorDetails.filter(res => {
        return res.city.toLocaleLowerCase().match(this.city.toLocaleLowerCase());
      });
    } else if (this.city == "") {
      this.ngOnInit();
    }


  }



  onLoadPage(doctor: DoctorDetailsModel) {
    this.doctorsdetailService.test(doctor);
    this.router.navigate(['main/Doctors']);
  }

  // onLoadPage() {
  //   this.router.navigate(['main/appointment-list']);
  // }

  constructor(public doctorlistingService: DoctorListingService,
    public router: Router,
    public doctorsdetailService: DoctorsDetailService,
    public authenticationService: AuthenticationService) { }

  // Load a list of all doctors whenever this component is visited.
  ngOnInit(): void {
    this.fetchDoctorsList();
  }

  // Unsubscribe the doctor-listing service when component is not in use.
  ngOnDestroy(): void {
    this.doctorListingSubscription.unsubscribe();
  }

  onLoad() {
    this.router.navigate(['main/add-doctors']);
  }
}
