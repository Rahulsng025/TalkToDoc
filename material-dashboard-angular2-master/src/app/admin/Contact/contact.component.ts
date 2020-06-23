import { Component, OnInit } from '@angular/core';
import { ContactService } from 'app/Services/contact.service';
import { ContactModel } from 'app/model/contact.model';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newContactDetails: ContactModel[];

  public successMsg: String;
  public errorMsg: String;
  public loading = true;

  public displayedColumns = [
    "name",
    "email",
    "message"
  ];

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactService.getcontact()
      .subscribe((data: ContactModel[]) => {
        this.newContactDetails = data;
        console.log(this.newContactDetails);
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });
  }

  deletecontact(id: string) {
    console.log('ID:' + id);
    this.contactService.deletecontact(id)
      .pipe(
        mergeMap(() => this.contactService.getcontact())
      )
      .subscribe((newContactDetails: ContactModel[]) => {
        console.log('Data Received');
        console.log(newContactDetails);
        this.newContactDetails = this.newContactDetails;
        this.successMsg = "Successfully submit your Query"
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
        });
  }

}


