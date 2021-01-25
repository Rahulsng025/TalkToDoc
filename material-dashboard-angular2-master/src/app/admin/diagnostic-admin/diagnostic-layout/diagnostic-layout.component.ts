import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DoctorListingService } from 'app/Services/doctorlisting.service';
import { DiagnosticCenterModel } from 'app/model/diagnostic_center.model';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-diagnostic-layout',
  templateUrl: './diagnostic-layout.component.html',
  styleUrls: ['./diagnostic-layout.component.css']
})
export class DiagnosticLayoutComponent implements OnInit {
  diagnostic_center: DiagnosticCenterModel[];

  constructor(public doctorlistingService: DoctorListingService,
    public router: Router,
    public dialogRef: MatDialogRef<DiagnosticLayoutComponent>
  ) { }

  ngOnInit(): void {
    this.doctorlistingService.getDiagnosticcenter();
  }

  onClear() {
    this.doctorlistingService.form.reset();
    this.doctorlistingService.initializeFormGroup();
  }

  onSubmit() {
    if (this.doctorlistingService.form.valid) {
      this.doctorlistingService
        .addDiagnosticcenter(this.doctorlistingService.form.value)
        .subscribe((_data: DiagnosticCenterModel[]) => {
          this.router.navigate(["/admin/diagnostic"]);
          this.doctorlistingService.form.reset();
          this.doctorlistingService.initializeFormGroup();
          this.onClose();
        });
    }
  }
  onClose() {
    this.doctorlistingService.form.reset();
    this.doctorlistingService.initializeFormGroup();
    this.dialogRef.close();
  }

}
