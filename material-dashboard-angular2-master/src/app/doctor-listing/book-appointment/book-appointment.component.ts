import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentListingService } from '../../Services/appointment-listing.service';
import { book_appointment } from '../../../app/model/book_appointment.model';
import { mergeMap } from 'rxjs/operators';





@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {
  book_appointment: book_appointment[];
  public loading = true;
  public errorMsg: String;
  public successMsg: String;




  public displayedColumns = [
    "name",
    "gender",
    "mobile",
    "address",
    "email",
    "dateofbirth",
    "consultingdoctor",
    "dateofappointment",
    "timeofappointment",
    "injury",
    "cancel"

  ];



  constructor(private bookAppointmentService: AppointmentListingService, private router: Router) { }

  ngOnInit(): void {


    this.bookAppointmentService
      .getbookappointment()
      .subscribe((data: book_appointment[]) => {
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
      .subscribe((book_appointment: book_appointment[]) => {

        console.log(`Data received`);
        console.log(book_appointment);

        this.book_appointment = book_appointment;
        this.successMsg = "Successfully cancelled the appointmet"
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;

        });
  }

}
