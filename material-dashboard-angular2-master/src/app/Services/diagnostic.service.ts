import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiagnosticRegistrationModel } from 'app/model/diagnostic_registration.model';
import { Observable } from "rxjs";

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
    return this.http.get(`/diagnostics`);
  }

  deleteDiagnostic(_id: string): Observable<any> {
    return this.http.delete(`/diagnostics/${_id}`);
  }
}
