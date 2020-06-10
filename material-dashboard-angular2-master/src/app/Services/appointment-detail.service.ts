import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})


export class AppointmentDetailService {
  // details: AppointmentDetail;
  appointmentUpdateTracker = new Subject<FormGroup>();

  updateFormValues(form: FormGroup) {
    this.appointmentUpdateTracker.next(form);
  }

  constructor() { }
}
