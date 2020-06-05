import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiagnosticRegistrationModel } from 'app/model/diagnostic_registration.model';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  //Model class of diagnostic center registration.
  allDiagnosticRegistrationDetails: DiagnosticRegistrationModel[];

  //Api server port uri.
  uri = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getDiagnostic() {
    return this.http.get(`${this.uri}/diagnostics`);
  }
}
