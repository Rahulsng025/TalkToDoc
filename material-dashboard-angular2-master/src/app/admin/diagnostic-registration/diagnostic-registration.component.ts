import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DiagnosticService } from 'app/Services/diagnostic.service';
import { DiagnosticRegistrationModel } from 'app/model/diagnostic_registration.model';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-diagnostic-registration',
  templateUrl: './diagnostic-registration.component.html',
  styleUrls: ['./diagnostic-registration.component.css']
})
export class DiagnosticRegistrationComponent implements OnInit {

  allDiagnosticRegistrationDetails: DiagnosticRegistrationModel[];

  displayedColumns = ['name', 'number', 'email', 'username', 'action'];

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

  deleteDiagnostic(id: string) {
    console.log("ID:" + id);
    this.diagnosticService
      .deleteDiagnostic(id)
      .pipe(mergeMap(() => this.diagnosticService.getDiagnostic()))
      .subscribe((allDiagnosticRegistrationDetails: DiagnosticRegistrationModel[]) => {
        console.log(`Data received`);
        console.log(allDiagnosticRegistrationDetails);

        this.allDiagnosticRegistrationDetails = allDiagnosticRegistrationDetails;
      });
  }
}
