import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AppointmentDetailsModel } from "app/model/appointment_list.model";
import { AppointmentListingService } from "app/Services/appointment-listing.service";

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {
  @ViewChild("appointmentForm") appointmentForm: NgForm;

  public successMsg: String;
  public errorMsg: String;

  // adding new appointment.
  bookNewAppointment() {
    console.log(this.appointmentForm);
    let newAppointment: AppointmentDetailsModel = {
      name: this.appointmentForm.form.value.name,
      gender: this.appointmentForm.form.value.gender,
      mobile: this.appointmentForm.form.value.mobile,
      address: this.appointmentForm.form.value.address,
      email: this.appointmentForm.form.value.email,
      dateofbirth: this.appointmentForm.form.value.dateofbirth,
      consultingdoctor: this.appointmentForm.form.value.consultingdoctor,
      timeofappointment: this.appointmentForm.form.value.timeofappointment,
      dateofappointment: this.appointmentForm.form.value.dateofappointment,
      injury: this.appointmentForm.form.value.injury,
    };

    // calling the service to add new appointment.
    this.appointmentListingService
      .addbookappointment(newAppointment)
      .subscribe((data: any) => {
        // do something with the data.
        console.log("Booked!");
      });
  }

  constructor(private appointmentListingService: AppointmentListingService) {}

  ngOnInit(): void {}
}
