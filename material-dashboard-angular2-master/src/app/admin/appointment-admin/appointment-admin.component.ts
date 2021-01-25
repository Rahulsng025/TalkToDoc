import { Component, OnInit } from '@angular/core';
import { AppointmentDetailsModel } from 'app/model/appointment_list.model';
import { AppointmentListingService } from 'app/Services/appointment-listing.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-appointment-admin',
  templateUrl: './appointment-admin.component.html',
  styleUrls: ['./appointment-admin.component.css']
})
export class AppointmentAdminComponent implements OnInit {

  book_appointment: AppointmentDetailsModel[];
  public loading = true;
  public errorMsg: String;
  public successMsg: String;

  public displayedColumns = [
    "fname",
    "lname",
    "gender",
    "mobile",
    "address",
    "email",
    "dateofbirth",
    "consultingdoctor",
    "dateofappointment",
    "timeofappointment",
    "injury",
    "action"

  ];


  constructor(public bookAppointmentService: AppointmentListingService, public router: Router) { }

  ngOnInit(): void {


    this.bookAppointmentService
      .getbookappointment()
      .subscribe((data: AppointmentDetailsModel[]) => {
        this.book_appointment = data;

        console.log(this.book_appointment);
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });

  }

  deletebookappointment(id: string) {

    console.log('ID: ' + id);

    this.bookAppointmentService.deletebookappointment(id)
      .pipe(
        mergeMap(() => this.bookAppointmentService.getbookappointment())
      )
      .subscribe((book_appointment: AppointmentDetailsModel[]) => {

        console.log(`Data received`);
        console.log(book_appointment);

        this.book_appointment = book_appointment;
        this.successMsg = "Successfully cancelled the appointment"
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;

        });
  }

  updateInfo(userID: string, newData: AppointmentDetailsModel) {
    if (this.bookAppointmentService.form.valid) {
      this.bookAppointmentService.updateAppointment(userID, newData).subscribe((result: AppointmentDetailsModel) => {
        console.log('result:');
        console.log(result);
      });
    }
  }
}
