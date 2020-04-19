import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorListingService } from '../Services/doctorlisting.service';
import {medical_insurance} from '../../app/model/medical_insurance.model';

@Component({
  selector: 'app-medical-insurance',
  templateUrl: './medical-insurance.component.html',
  styleUrls: ['./medical-insurance.component.css']
})
export class MedicalInsuranceComponent implements OnInit {

  medical_insurance: medical_insurance[];
  displayedcolumns: ['title', 'country_name', 'description'];

  constructor(private doctorlistingService: DoctorListingService, private router: Router) { }

  ngOnInit(): void {

    this.fetchmedical_insurance();

  }
  fetchmedical_insurance() {
    this.doctorlistingService
    .getmedicalinsurance()
    .subscribe((data: medical_insurance[]) => {
      this.medical_insurance = data;
    
      console.log(this.medical_insurance);
    });
  }


}
