import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalInsuranceService } from '../Services/medical-insurance.service';
import { MedicalInsuranceModel } from '../../app/model/medical_insurance.model';

@Component({
  selector: 'app-medical-insurance',
  templateUrl: './medical-insurance.component.html',
  styleUrls: ['./medical-insurance.component.css']
})
export class MedicalInsuranceComponent implements OnInit {

  allmedicalinsuranceDetails: MedicalInsuranceModel[];
  displayedcolumns: ['title', 'country_name', 'description'];

  constructor(private medicalinsuranceService: MedicalInsuranceService, private router: Router) { }

  ngOnInit(): void {

    this.fetchmedical_insurance();

  }
  fetchmedical_insurance() {
    this.medicalinsuranceService
      .getmedicalinsurance()
      .subscribe((data: MedicalInsuranceModel[]) => {
        this.allmedicalinsuranceDetails = data;

        console.log(this.allmedicalinsuranceDetails);
      });
  }


}
