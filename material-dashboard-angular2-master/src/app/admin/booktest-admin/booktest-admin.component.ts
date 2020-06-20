import { Component, OnInit } from '@angular/core';
import { BookTestModel } from 'app/model/book_test.model';
import { BookTestService } from 'app/Services/book-test.service';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-booktest-admin',
  templateUrl: './booktest-admin.component.html',
  styleUrls: ['./booktest-admin.component.css']
})
export class BooktestAdminComponent implements OnInit {

  newBookTestDetails: BookTestModel[];

  public loading = true;
  public errorMsg: String;
  public successMsg: String;

  public displayedColumns = [
    "patient_name",
    "gender",
    "age",
    "email",
    "number",
    "home_address",
    "locality",
    "pincode",
    "city",
    "time",
    "date",
    "action"
  ];

  constructor(private router: Router,
    private booktestService: BookTestService) { }

  ngOnInit(): void {

    this.booktestService.getbooktest().
      subscribe((data: BookTestModel[]) => {
        this.newBookTestDetails = data;
        console.log(this.newBookTestDetails);
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });

  }

  deletebooktest(id: string) {
    console.log('ID:' + id);

    this.booktestService.deletebooktest(id)
      .pipe(
        mergeMap(() => this.booktestService.getbooktest())
      )
      .subscribe((newBookTestDetails: BookTestModel[]) => {
        console.log('Data Received');
        console.log(newBookTestDetails);

        this.newBookTestDetails = newBookTestDetails;
        this.successMsg = "Successfully cancelled the appointment"
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        });
  }

}
