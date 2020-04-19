import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorListingService } from '../Services/doctorlisting.service';
import {diagnostic_center} from '../../app/model/diagnostic_center.model';

@Component({
  selector: 'app-diagnostic-center',
  templateUrl: './diagnostic-center.component.html',
  styleUrls: ['./diagnostic-center.component.css']
})
export class DiagnosticCenterComponent implements OnInit {

  diagnostic_center: diagnostic_center[];
  displayedColumns = ['name', 'established_in','address', 'contact', ' landmark',' website'];

  constructor(private doctorlistingService : DoctorListingService, private router: Router) { }

  ngOnInit(): void {
    this.fetchdiagnostic_center();
  }

  fetchdiagnostic_center(){
    this.doctorlistingService
    .getDiagnosticcenter()
    .subscribe((data: diagnostic_center[]) => {
      this.diagnostic_center = data;
    
      console.log(this.diagnostic_center);
    });
  }


}
