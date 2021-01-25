import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MedicalInsuranceService } from "app/Services/medical-insurance.service";
import { MedicalInsuranceModel } from "app/model/medical_insurance.model";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-medical-layout',
  templateUrl: './medical-layout.component.html',
  styleUrls: ['./medical-layout.component.css']
})
export class MedicalLayoutComponent implements OnInit {
  allMedicalInsuranceDetails: MedicalInsuranceModel[];

  constructor(public medicalinsuranceService: MedicalInsuranceService,
    public router: Router,
    public dialogRef: MatDialogRef<MedicalLayoutComponent>
  ) { }

  ngOnInit(): void {
    this.medicalinsuranceService.getmedicalinsurance();
  }

  onClear() {
    this.medicalinsuranceService.form.reset();
    this.medicalinsuranceService.initializeFormGroup();
  }
  onSubmit() {
    if (this.medicalinsuranceService.form.valid) {
      this.medicalinsuranceService
        .addmedicalinsurance(this.medicalinsuranceService.form.value)
        .subscribe((_data: MedicalInsuranceModel[]) => {
          this.router.navigate(["/admin/medical"]);
          this.medicalinsuranceService.form.reset();
          this.medicalinsuranceService.initializeFormGroup();
          this.onClose();
        });
    }
  }
  onClose() {

    this.dialogRef.close();
  }


}
