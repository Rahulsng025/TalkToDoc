import { Component, OnInit } from '@angular/core';
import { AppointmentDetailService } from 'app/Services/appointment-detail.service';
import { AppointmentDetailsModel } from "app/model/appointment_list.model";

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  details: AppointmentDetailsModel;

  constructor(private appointmentDetailService: AppointmentDetailService) { }

  ngOnInit(): void {

    this.details = this.appointmentDetailService.getValues();

  }

}
