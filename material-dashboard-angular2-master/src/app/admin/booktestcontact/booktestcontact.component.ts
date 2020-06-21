import { Component, OnInit } from '@angular/core';
import { BookTestContactModel } from 'app/model/book_test_contact.model';
import { BookTestContactService } from "app/Services/book-test-contact.service";
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-booktestcontact',
  templateUrl: './booktestcontact.component.html',
  styleUrls: ['./booktestcontact.component.css']
})
export class BooktestcontactComponent implements OnInit {

  newBookTestContact: BookTestContactModel[];
  public successMsg: String;
  public errorMsg: String;
  public loading = true;

  public displayedColumns = [
    "name",
    "location",
    "reg_number",
    "email",
    "number",
    "action"
  ];

  constructor(private router: Router,
    private booktestcontactService: BookTestContactService) { }

  ngOnInit(): void {

    this.booktestcontactService.getbooktestcontact()
      .subscribe((data: BookTestContactModel[]) => {
        this.newBookTestContact = data;
        console.log(this.newBookTestContact);
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });
  } deletebooktestcontact(id: string) {
    console.log('ID:' + id);
    this.booktestcontactService.deletebooktestcontact(id)
      .pipe(
        mergeMap(() => this.booktestcontactService.getbooktestcontact())
      )
      .subscribe((newBookTestContact: BookTestContactModel[]) => {
        console.log('Data Received');
        console.log(newBookTestContact);
        this.newBookTestContact = newBookTestContact;
        this.successMsg = "You're now partner with us"
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        });
  }

}
