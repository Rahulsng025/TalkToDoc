import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MedicalInsuranceService } from "app/Services/medical-insurance.service";
import { MedicalInsuranceModel } from "app/model/medical_insurance.model";
import { MatDialog } from "@angular/material/dialog";
import { mergeMap } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table"
import { MatDialogConfig } from "@angular/material/dialog"
import { MedicalLayoutComponent } from "app/admin/medical-admin/medical-layout/medical-layout.component";

@Component({
  selector: 'app-medical-admin',
  templateUrl: './medical-admin.component.html',
  styleUrls: ['./medical-admin.component.css']
})
export class MedicalAdminComponent implements OnInit {
  allMedicalInsuranceDetails: MedicalInsuranceModel[];

  displayedColumns: ['title', 'country_name', 'description'];
  searchKey: string;

  constructor(private medicalinsuranceService: MedicalInsuranceService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchMedicalList();
  }

  fetchMedicalList() {
    this.medicalinsuranceService
      .getmedicalinsurance()
      .subscribe((data: MedicalInsuranceModel[]) => {
        this.allMedicalInsuranceDetails = data;
        console.log(this.allMedicalInsuranceDetails);
      });
  }

  deletemedicalinsurance(id: string) {
    console.log("ID: " + id);

    this.medicalinsuranceService
      .deletemedicalinsurance(id)
      .pipe(mergeMap(() => this.medicalinsuranceService.getmedicalinsurance()))
      .subscribe((allMedicalInsuranceDetails: MedicalInsuranceModel[]) => {
        console.log(`Data received`);
        console.log(allMedicalInsuranceDetails);

        this.allMedicalInsuranceDetails = allMedicalInsuranceDetails;
      });
  }

  onSearchClear() {
    this.searchKey = "";
    // this.applyFilter();
  }

  onCreate() {
    this.medicalinsuranceService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(MedicalLayoutComponent, dialogConfig);
  }

}