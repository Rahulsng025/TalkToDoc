import { Component, OnInit } from '@angular/core';
import { DoctorListingService } from 'app/Services/doctorlisting.service';
import { book_appointment } from 'app/model/book_appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  public successMsg: String;
  public errorMsg: String;

  public name: string;
  public gender: string;
  public mobile: string;
  public address: string;
  public email: string;
  public dateofbirth: string;
  public consultingdoctor: string;
  public dateofappointment: string;
  public timeofappointment: string;
  public injury: string;


  constructor(private doctorlistingService: DoctorListingService) { }

  ngOnInit(): void {
  }

  bookappointment() {
    this.successMsg = "";
    this.errorMsg = "";
    this.doctorlistingService.addbookappointment(
      this.name,
      this.gender,
      this.mobile,
      this.address,
      this.email,
      this.dateofbirth,
      this.consultingdoctor,
      this.dateofappointment,
      this.timeofappointment,
      this.injury).subscribe((addbookappointment: AppointmentListComponent) => {
        this.name = "";
        this.gender = "";
        this.mobile = "";
        this.address = "";
        this.email = "";
        this.dateofbirth = "";
        this.consultingdoctor = "";
        this.dateofappointment = "";
        const dateofappointment = new Date(addbookappointment.dateofappointment).toDateString();
        this.timeofappointment = "";
        this.injury = "";
        this.successMsg = `Appointment book successfully for ${dateofappointment}`;
      },
        (error: ErrorEvent) => {

          this.errorMsg = error.error.message;
        });
  }

}
