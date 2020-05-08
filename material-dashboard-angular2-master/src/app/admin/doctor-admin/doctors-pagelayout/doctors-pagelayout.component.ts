import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { doctorspagelayoutService } from "app/admin/doctor-admin/doctors-pagelayout/doctorpagelayout.service";


@Component({
  selector: 'app-doctors-pagelayout',
  templateUrl: './doctors-pagelayout.component.html',
  styleUrls: ['./doctors-pagelayout.component.css']
})
export class DoctorsPagelayoutComponent implements OnInit {



  constructor(private service: doctorspagelayoutService) { }

  ngOnInit(): void {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
