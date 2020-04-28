import { Component, OnInit } from '@angular/core';
import { DoctorListingService } from 'app/Services/doctorlisting.service';
import { book_appointment } from 'app/model/book_appointment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  book_appointment: book_appointment[];

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

  print() {

    this.router.navigate(['/book-appointment']);
  }

  constructor(private doctorlistingService: DoctorListingService, private router: Router) { }

  ngOnInit(): void {
  }

  addbookappointment() {
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
      this.injury).subscribe((addbookappointment: book_appointment[]) => {
        this.name = "";
        this.gender = "";
        this.mobile = "";
        this.address = "";
        this.email = "";
        this.dateofbirth = "";
        this.consultingdoctor = "";
        this.dateofappointment = "";
        this.timeofappointment = "";
        this.injury = "";

      },
        (error: ErrorEvent) => {

          this.errorMsg = error.error.message;
        });
  }

}
