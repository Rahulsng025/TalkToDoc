import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";


import { AppointmentDetailsModel } from "app/model/appointment_list.model";
import { AppointmentListingService } from "app/Services/appointment-listing.service";
import { MatSelectModule } from '@angular/material/select';
import { Router } from "@angular/router";
import { AppointmentDetailService } from "app/Services/appointment-detail.service";
import { FlashMessagesService } from "angular2-flash-messages";

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

  public successMsg: String;
  public errorMsg: String;


  isAppointmentBooked: boolean;

  constructor(private appointmentListingService: AppointmentListingService,
    private appointmentDetailService: AppointmentDetailService,
    private router: Router,
    private FlashMessage: FlashMessagesService) { }

  ngOnInit(): void { }

  onClear() {
    this.appointmentListingService.form.reset();
    this.appointmentListingService.initializeFormGroup();
  }
  onSubmit() {
    if (this.appointmentListingService.form.valid) {
      this.appointmentDetailService.updateValue(this.appointmentListingService.form.value);

      this.appointmentListingService
        .addbookappointment(this.appointmentListingService.form.value)
        .subscribe((_data: AppointmentDetailsModel[]) => {

          // passing the new form values to the 'appointment-details' component and its service.

          this.appointmentListingService.form.reset();
          this.appointmentListingService.initializeFormGroup();
          this.isAppointmentBooked = true;
        });
      this.FlashMessage.show('Appointment Booked Successfully', { cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(['/main/appointment-details']);
    }
  }

}