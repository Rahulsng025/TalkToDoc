import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DiagnosticService } from 'app/Services/diagnostic.service';
import { DiagnosticRegistrationModel } from 'app/model/diagnostic_registration.model';

@Component({
  selector: 'app-diagnostic-registration',
  templateUrl: './diagnostic-registration.component.html',
  styleUrls: ['./diagnostic-registration.component.css']
})
export class DiagnosticRegistrationComponent implements OnInit {

  allDiagnosticRegistrationDetails: DiagnosticRegistrationModel[];

  displayedColumns = ['name', 'number', 'email', 'username'];

  constructor(private diagnosticService: DiagnosticService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchDiagnosticDetail();
  }
  fetchDiagnosticDetail() {
    this.diagnosticService.getDiagnostic().subscribe((diagnostic: DiagnosticRegistrationModel[]) => {
      this.allDiagnosticRegistrationDetails = diagnostic;
      console.log(this.allDiagnosticRegistrationDetails);
    });

  }
}
