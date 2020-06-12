import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeCareModel } from "../../app/model/home_care.model";
import { HomeCareService } from "../Services/home-care.service";
import { HomeCareAppointmentService } from "app/Services/home-care-appointment.service"
import { HomeCareAppointmentModel } from "app/model/home_care_appointment";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-home-care",
  templateUrl: "./home-care.component.html",
  styleUrls: ["./home-care.component.css"],
})
export class HomeCareComponent implements OnInit {
  allHomeCareDetails: HomeCareModel[];
  allHomeCareAppointmentDetails: HomeCareAppointmentModel[];
  displayedColumns = ["title", "address", "state", "country"];
  displayedColumn = ["name", "gender", "email", "howsoon", "number", "frequency", "forwhom", "age"];
  isAppointmentBooked: boolean;


  constructor(
    private homecareService: HomeCareService,
    private router: Router,
    private homecareappointmentService: HomeCareAppointmentService,
    private FlashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.fetchhome_care();
  }

  fetchhome_care() {
    this.homecareService.gethomecare().subscribe((data: HomeCareModel[]) => {
      this.allHomeCareDetails = data;

      console.log(this.allHomeCareDetails);
    });
  }

  onClear() {
    this.homecareappointmentService.form.reset();
    this.homecareappointmentService.initializeFormGroup();
  }

  onSubmit() {
    if (this.homecareappointmentService.form.valid) {
      this.homecareappointmentService
        .addhomecareappointment(this.homecareappointmentService.form.value)
        .subscribe((_data: HomeCareAppointmentModel[]) => {
          this.homecareappointmentService.form.reset();
          this.homecareappointmentService.initializeFormGroup();
          this.isAppointmentBooked = true;

        });
      this.FlashMessage.show('Appointment Booked Successfully', { cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(["/admin/homecareappointment"]);
    }
  }
}
