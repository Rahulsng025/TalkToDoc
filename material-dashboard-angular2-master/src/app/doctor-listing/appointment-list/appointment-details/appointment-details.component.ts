import { Component, OnInit } from '@angular/core';
import { AppointmentDetailService } from 'app/Services/appointment-detail.service';
import { AppointmentDetail } from "app/model/appointment-details.model"
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  details: AppointmentDetail;

  constructor(private appointmentDetailService: AppointmentDetailService) { }

  ngOnInit(): void {
    this.appointmentDetailService.appointmentUpdateTracker.asObservable().subscribe((form: FormGroup) => {
      this.details["First Name"] = form.value.fname;
      this.details["Last Name"] = form.value.fname;
      this.details["Date of Birth"] = form.value.fname;
      this.details["Consulting Doctor"] = form.value.fname;
      this.details["Date of Appointment"] = form.value.fname;
      this.details["Time of Appointment"] = form.value.fname;
      this.details.Gender = form.value.gender;
      this.details.Mobile = form.value.mobile;
      this.details.Address = form.value.address;
      this.details.Email = form.value.email;
      this.details.Injury = form.value.injury;
    });

    console.log(this.details);
  }

}
