import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DoctorService } from 'app/Services/doctor.service';
import { DoctorRegistrationModel } from 'app/model/Doctor_registration.model';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css']
})
export class DoctorRegistrationComponent implements OnInit {


  allDoctorRegistrationDetails: DoctorRegistrationModel[];
  displayedColumns = ['name', 'number', 'gender', 'email', 'username', 'action'];


  constructor(private doctorService: DoctorService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchDoctorDetail();
  }

  fetchDoctorDetail() {
    this.doctorService.getdoctors().subscribe((doctor: DoctorRegistrationModel[]) => {
      this.allDoctorRegistrationDetails = doctor;
      console.log(this.allDoctorRegistrationDetails);
    });

  }
  deletedoctors(id: string) {
    console.log("ID:" + id);
    this.doctorService
      .deletedoctors(id)
      .pipe(mergeMap(() => this.doctorService.getdoctors()))
      .subscribe((allDoctorRegistrationDetails: DoctorRegistrationModel[]) => {
        console.log(`Data received`);
        console.log(allDoctorRegistrationDetails);

        this.allDoctorRegistrationDetails = allDoctorRegistrationDetails;
      });
  }
}
