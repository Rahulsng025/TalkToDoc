import { Injectable } from '@angular/core';
import { AppointmentDetailsModel } from "app/model/appointment_list.model";


@Injectable({
  providedIn: 'root'
})


export class AppointmentDetailService {
  details: AppointmentDetailsModel;

  updateValue(values: AppointmentDetailsModel) {
    this.details = values;
  }

  getValues() {
    return this.details;
  }

  constructor() { }
}
 