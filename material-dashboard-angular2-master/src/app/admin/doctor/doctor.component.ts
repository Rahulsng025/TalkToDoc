import { Component, OnInit } from '@angular/core';
import { AddDoctorsModel } from "app/model/add_doctors.model";
import { AddDoctorsService } from "app/Services/add-doctors.service";
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  newdoctorsDetails: AddDoctorsModel[];

  public loading = true;
  public errorMsg: String;
  public successMsg: String;

  public displayedColumns = [
    "name",
    "gender",
    "mobile",
    "email",
    "certificate",
    "department",
    "speciality",
    "degrees",
    "training",
    "city",
    "action"

  ];

  constructor(public adddoctorsService: AddDoctorsService,
    public router: Router) { }

  ngOnInit(): void {

    this.adddoctorsService
      .getadddoctors()
      .subscribe((data: AddDoctorsModel[]) => {
        this.newdoctorsDetails = data;

        console.log(this.newdoctorsDetails);
        this.loading = false;
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;
          this.loading = false;
        });

  }
  deleteadddoctors(id: string) {

    console.log('ID: ' + id);

    this.adddoctorsService.deleteadddoctors(id)
      .pipe(
        mergeMap(() => this.adddoctorsService.getadddoctors())
      )
      .subscribe((newdoctorsDetails: AddDoctorsModel[]) => {

        console.log(`Data received`);
        console.log(newdoctorsDetails);

        this.newdoctorsDetails = newdoctorsDetails;
        this.successMsg = "Doctor Registered Successfully "
      },
        (error: ErrorEvent) => {
          this.errorMsg = error.error.message;

        });
  }
}



