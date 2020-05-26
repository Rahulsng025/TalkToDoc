import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
// import * as jsPDF from 'jspdf';

import { AppointmentDetailsModel } from "app/model/appointment_list.model";
import { AppointmentListingService } from "app/Services/appointment-listing.service";
import { MatSelectModule } from '@angular/material/select';
import { Router } from "@angular/router";
import { AppointmentDetailService } from "app/Services/appointment-detail.service";

//For iterating the doctor's list
interface consultingdoctor {
  id: string;
  name: string;
}

@Component({
  selector: "app-appointment-list",
  templateUrl: "./appointment-list.component.html",
  styleUrls: ["./appointment-list.component.css"],
})
export class AppointmentListComponent implements OnInit {

  //Convert html file to pdf

  // @ViewChild('content') content: ElementRef;


  // public downloadPDF() {
  //   // const doc = new jsPDF();

  //   let specialElementHandler = {
  //     '#editor': function (element: any, renderer: any) {
  //       return true;
  //     }
  //   };

  //   let content = this.content.nativeElement;
  //   doc.fromHTML(content.innerHTML, 15, 15, {
  //     'width': 190,
  //     'elementHandlers': specialElementHandler
  //   });
  //   doc.save('first.pdf');
  // }

  // isAppointmentBooked: boolean = false;


  public successMsg: String;
  public errorMsg: String;

  consult: consultingdoctor[] = [
    { id: '1', name: "DR. AKHIL AGRAWAL" },
    { id: '2', name: "DR. S.N. SANKHWAR" },
    { id: '3', name: "DR. VIMAL KUMAR" },
    { id: '4', name: "DR. NOUSHIF M" }
  ];
  isAppointmentBooked: boolean;

  constructor(private appointmentListingService: AppointmentListingService, private appointmentDetailService: AppointmentDetailService, private router: Router) { }

  ngOnInit(): void { }

  onClear() {
    this.appointmentListingService.form.reset();
    this.appointmentListingService.initializeFormGroup();
  }
  onSubmit() {
    if (this.appointmentListingService.form.valid) {
      this.appointmentListingService
        .addbookappointment(this.appointmentListingService.form.value)
        .subscribe((_data: AppointmentDetailsModel[]) => {
          this.appointmentListingService.form.reset();
          this.appointmentListingService.initializeFormGroup();
          this.isAppointmentBooked = true;

          // passing the new form values to the 'appointment-details' component and its service.
          this.appointmentDetailService.updateFormValues(this.appointmentListingService.form)
        });

      this.router.navigate(['/appointment-detail']);
    }
  }
}