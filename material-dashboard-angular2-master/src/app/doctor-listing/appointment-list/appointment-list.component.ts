import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AppointmentDetailsModel } from "app/model/appointment_list.model";
import { AppointmentListingService } from "app/Services/appointment-listing.service";
import { Router } from "@angular/router";

//For iterating the doctor's list
interface consultingdoctor {
  id: string;
  name: string;
}

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {
  @ViewChild("appointmentForm") appointmentForm: NgForm;

  public successMsg: String;
  public errorMsg: String;




  consult: consultingdoctor[] = [
    { id: '1', name: "DR. AKHIL AGRAWAL" },
    { id: '2', name: "DR. S.N. SANKHWAR" },
    { id: '3', name: "DR. VIMAL KUMAR" },
    { id: '4', name: "DR. NOUSHIF M" }
  ];



  constructor(private appointmentListingService: AppointmentListingService, private router: Router) { }





  // adding new appointment.
  bookNewAppointment() {
    console.log(this.appointmentForm);
    let newAppointment: AppointmentDetailsModel = {
      fname: this.appointmentForm.form.value.fname,
      lname: this.appointmentForm.form.value.lname,
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
      .subscribe((_data: any) => {
        // do something with the data.
        console.log("Booked!");
        this.router.navigate(['/book-appointment']);
      });
  }



  ngOnInit(): void { }

  onClear() {
    this.appointmentListingService.form.reset();
    this.appointmentListingService.initializeFormGroup();
  }
  onSubmit() {
    if (this.appointmentListingService.form.valid) {
      this.appointmentListingService
        .addbookappointment(this.appointmentListingService.form.value)
        .subscribe((_data: AppointmentDetailsModel[]) => {
          this.router.navigate(["/book-appointment"]);
          this.appointmentListingService.form.reset();
          this.appointmentListingService.initializeFormGroup();

        });
    }
  }
}