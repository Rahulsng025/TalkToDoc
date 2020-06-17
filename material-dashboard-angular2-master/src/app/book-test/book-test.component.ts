import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(config: NgbCarouselConfig) {
    config.interval = 4000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

}
