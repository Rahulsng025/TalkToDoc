import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BookTestModel } from 'app/model/book_test.model';
import { BookTestService } from 'app/Services/book-test.service';




@Component({
  selector: 'app-paitent-details',
  templateUrl: './paitent-details.component.html',
  styleUrls: ['./paitent-details.component.css']
})
export class PaitentDetailsComponent implements OnInit {

  newbooktestDetails: BookTestModel[];
  isappointmentBooked: boolean;

  constructor(private router: Router,
    private booktestService: BookTestService) { }

  ngOnInit(): void {

  }

  onClear() {
    this.booktestService.form.reset();
    this.booktestService.initializeFormGroup();
  }

  onSubmit() {
    this.booktestService.postbooktest(this.booktestService.form.value)
      .subscribe((_data: BookTestModel[]) => {
        this.booktestService.form.reset();
        this.booktestService.initializeFormGroup();
        this.isappointmentBooked = true;

      });
  }

}
