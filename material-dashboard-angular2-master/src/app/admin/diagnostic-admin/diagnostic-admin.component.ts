import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DoctorListingService } from 'app/Services/doctorlisting.service';
import { DiagnosticCenterModel } from 'app/model/diagnostic_center.model';
import { MatDialog } from "@angular/material/dialog";
import { mergeMap } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table"
import { MatDialogConfig } from "@angular/material/dialog"
import { DiagnosticLayoutComponent } from './diagnostic-layout/diagnostic-layout.component';
//import { DiagnosticLayoutComponent } from './diagnostic-layout/diagnostic-layout.component';




@Component({
  selector: 'app-diagnostic-admin',
  templateUrl: './diagnostic-admin.component.html',
  styleUrls: ['./diagnostic-admin.component.css']
})
export class DiagnosticAdminComponent implements OnInit {

  diagnostic_center: DiagnosticCenterModel[];
  displayedColumns = ['name', 'established_in', 'address', 'contact', 'landmark', 'website', 'action'];
  searchKey: string;
  applyFilter: any;



  constructor(private doctorlistingService: DoctorListingService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchdiagnostic_center();
  }
  fetchdiagnostic_center() {
    this.doctorlistingService
      .getDiagnosticcenter()
      .subscribe((data: DiagnosticCenterModel[]) => {
        this.diagnostic_center = data;

        console.log(this.diagnostic_center);
      });
  }

  deleteDiagnosticcenter(id: string) {
    console.log("ID: " + id);

    this.doctorlistingService
      .deleteDiagnosticcenter(id)
      .pipe(mergeMap(() => this.doctorlistingService.getDiagnosticcenter()))
      .subscribe((diagnostic_center: DiagnosticCenterModel[]) => {
        console.log(`Data received`);
        console.log(diagnostic_center);

        this.diagnostic_center = diagnostic_center;
      });
  }
  onCreate() {
    this.doctorlistingService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(DiagnosticLayoutComponent, dialogConfig);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }




}
