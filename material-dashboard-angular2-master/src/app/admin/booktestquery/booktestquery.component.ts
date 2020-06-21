import { Component, OnInit } from '@angular/core';
import { BookTestQueryModel } from 'app/model/book_test_query.model';
import { BookTestQueryService } from "app/Services/book-test-query.service";
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-booktestquery',
  templateUrl: './booktestquery.component.html',
  styleUrls: ['./booktestquery.component.css']
})
export class BooktestqueryComponent implements OnInit {

  newBookTestQuery: BookTestQueryModel[];
  public successMsg: String;
  public errorMsg: String;
  public loading = true;


  public displayedColumns = [
    "name",
    "query",
    "number",
    "action"
  ];

  constructor(private router: Router,
    private booktestqueryService: BookTestQueryService) { }

  ngOnInit(): void {

    this.booktestqueryService.getbooktestquery()
      .subscribe((data: BookTestQueryModel[]) => {
        this.newBookTestQuery = data;
        console.log(this.newBookTestQuery);
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });
  }

  deletebooktestquery(id: string) {
    console.log('ID:' + id);
    this.booktestqueryService.deletebooktestquery(id)
      .pipe(
        mergeMap(() => this.booktestqueryService.getbooktestquery())
      )
      .subscribe((newBookTestQuery: BookTestQueryModel[]) => {
        console.log('Data Received');
        console.log(newBookTestQuery);
        this.newBookTestQuery = newBookTestQuery;
        this.successMsg = "Successfully Booked the Query"
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        });
  }

}
