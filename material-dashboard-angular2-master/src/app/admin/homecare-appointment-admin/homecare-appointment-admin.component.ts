import { Component, OnInit } from '@angular/core';
import { HomeCareAppointmentModel } from "app/model/home_care_appointment"
import { MatDialog } from "@angular/material/dialog";
import { mergeMap } from "rxjs/operators";
import { MatDialogConfig } from "@angular/material/dialog"
import { HomeCareAppointmentService } from "app/Services/home-care-appointment.service";




@Component({
  selector: 'app-homecare-appointment-admin',
  templateUrl: './homecare-appointment-admin.component.html',
  styleUrls: ['./homecare-appointment-admin.component.css']
})
export class HomecareAppointmentAdminComponent implements OnInit {

  newHomeCareAppointmentDetails: HomeCareAppointmentModel[];

  displayedColumns = ["name", "gender", "email", "howsoon", "number", "frequency", "forwhom", "age", "action"];

  constructor(private homecareappointmentService: HomeCareAppointmentService) { }

  ngOnInit(): void {
    this.fetchHomecareList();
  }

  fetchHomecareList() {
    this.homecareappointmentService
      .gethomecareappointment()
      .subscribe((data: HomeCareAppointmentModel[]) => {
        this.newHomeCareAppointmentDetails = data;
        console.log(this.newHomeCareAppointmentDetails);
      });
  }



  deletehomecareappointment(id: string) {
    console.log("ID: " + id);

    this.homecareappointmentService
      .deletehomecareappointment(id)
      .pipe(mergeMap(() => this.homecareappointmentService.gethomecareappointment()))
      .subscribe((newHomeCareAppointmentDetails: HomeCareAppointmentModel[]) => {
        console.log(`Data received`);
        console.log(newHomeCareAppointmentDetails);

        this.newHomeCareAppointmentDetails = newHomeCareAppointmentDetails;
      });
  }
}
