import { Component, OnInit } from '@angular/core';
import { AddDoctorsModel } from "app/model/add_doctors.model";
import { AddDoctorsService } from "app/Services/add-doctors.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-doctors',
  templateUrl: './add-doctors.component.html',
  styleUrls: ['./add-doctors.component.css']
})
export class AddDoctorsComponent implements OnInit {

  public successMsg: String;
  public errorMsg: String;
  isdoctorregistered: boolean;

  constructor(public adddoctorsService: AddDoctorsService,
    public router: Router) { }

  ngOnInit(): void { }

  onSubmit() {

    this.adddoctorsService
      .addadddoctors(this.adddoctorsService.form.value)
      .subscribe((_data: AddDoctorsModel[]) => {

        // passing the new form values to the 'appointment-details' component and its service.

        this.adddoctorsService.form.reset();
        this.adddoctorsService.initializeFormGroup();
        this.isdoctorregistered = true;
      });

    this.router.navigate(['/admin/adddoctors']);
  }
}



