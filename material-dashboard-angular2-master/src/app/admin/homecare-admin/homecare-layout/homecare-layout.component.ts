import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HomeCareService } from "app/Services/home-care.service";
import { HomeCareModel } from "app/model/home_care.model";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-homecare-layout',
  templateUrl: './homecare-layout.component.html',
  styleUrls: ['./homecare-layout.component.css']
})
export class HomecareLayoutComponent implements OnInit {
  allHomeCareDetails: HomeCareModel[];


  constructor(public homecareService: HomeCareService,
    public router: Router,
    public dialogRef: MatDialogRef<HomecareLayoutComponent>


  ) { }

  ngOnInit(): void {
    this.homecareService.gethomecare();
  }

  onClear() {
    this.homecareService.form.reset();
    this.homecareService.initializeFormGroup();
  }

  onSubmit() {
    if (this.homecareService.form.valid) {
      this.homecareService
        .addhomecare(this.homecareService.form.value)
        .subscribe((_data: HomeCareModel[]) => {
          this.router.navigate(["/admin/homecare"]);
          this.homecareService.form.reset();
          this.homecareService.initializeFormGroup();
          this.onClose();
        });
    }
  }
  onClose() {
    this.dialogRef.close();
  }
}

