import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppointmentDetailService } from 'app/Services/appointment-detail.service';
import { AppointmentDetailsModel } from "app/model/appointment_list.model";
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
  details: AppointmentDetailsModel;
  nativeElement: any;
  //Convert html file to pdf

  @ViewChild('content') content: ElementRef;


  public downloadPDF() {
    const doc = new jsPDF();

    const specialElementHandler = {
      '#editor': function (element: any, renderer: any) {
        return true;
      }
    };

    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHandlers': specialElementHandler
    });
    doc.save('first.pdf');
  }


  constructor(private appointmentDetailService: AppointmentDetailService) { }

  ngOnInit(): void {

    this.details = this.appointmentDetailService.getValues();

  }

}
