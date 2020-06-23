import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { BookTestQueryService } from 'app/Services/book-test-query.service';
import { Router } from "@angular/router";
import { BookTestQueryModel } from 'app/model/book_test_query.model';
import { BookTestContactModel } from 'app/model/book_test_contact.model';
import { BookTestContactService } from 'app/Services/book-test-contact.service';


interface Search {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-book-test',
  templateUrl: './book-test.component.html',
  styleUrls: ['./book-test.component.css']
})
export class BookTestComponent implements OnInit {
  name: string;
  mobile: string;
  query: string;

  Name: String;
  location: String;
  reg_number: String;
  email: String;
  number: String;

  // newBookTestQuery: BookTestQueryModel;
  // newBookTestContact: BookTestContactModel;

  search: Search[] = [
    { value: "1", viewValue: "Delhi" },
    { value: "2", viewValue: "Mumbai" },
    { value: "3", viewValue: "Hydrabad" },
    { value: "4", viewValue: "Lucknow" },
    { value: "5", viewValue: "Chennai" },
    { value: "6", viewValue: "Jaipur" },
    { value: "7", viewValue: "Bengaluru" },
    { value: "8", viewValue: "Jaipur" },
    { value: "9", viewValue: "Pune" },
    { value: "10", viewValue: "Kolkata" },
    { value: "11", viewValue: "Ahemdabad" }
  ]
  constructor(config: NgbCarouselConfig,
    private router: Router,
    private booktestqueryService: BookTestQueryService,
    private booktestcontactService: BookTestContactService) {
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  onLoadPage() {
    this.router.navigate(['main/lipid-profile']);
  }
  onLoad() {
    this.router.navigate(['main/liver-profile']);
  }
  onClick() {
    this.router.navigate(['main/blood-sugar']);
  }
  onclick() {
    this.router.navigate(['main/blood-sugar'])
  }

  onload() {
    this.router.navigate(['main/liver-profile']);
  }

  load() {
    this.router.navigate(['main/blood-sugar']);
  }

  click() {
    this.router.navigate(['main/liver-profile']);
  }

  onSubmit() {
    console.log(this.name);
    console.log(this.query);
    console.log(this.mobile);
    const newQuery = new BookTestQueryModel(this.name, this.query, this.mobile);

    this.booktestqueryService.postbooktestquery(newQuery).subscribe((data: BookTestQueryModel) => {
    })
  }

  onPageLoad() {
    console.log(this.Name);
    console.log(this.location);
    console.log(this.reg_number);
    console.log(this.email);
    console.log(this.number);
    const newQuery = new BookTestContactModel(this.Name, this.location, this.reg_number, this.email, this.number);
    this.booktestcontactService.postbooktestcontact(newQuery).subscribe((data: BookTestContactModel) => { })
  }

}
