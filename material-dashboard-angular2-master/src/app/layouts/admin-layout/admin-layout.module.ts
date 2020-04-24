import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";

import { NotificationsComponent } from "../../notifications/notifications.component";
import { UpgradeComponent } from "../../upgrade/upgrade.component";



import { MatInputModule } from "@angular/material/input";
import {
  MatRippleModule,
  MatOptionModule,
  MatCommonModule,
  MatNativeDateModule

} from "@angular/material/core";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from '@angular/material/button'
import { MatDatepickerModule } from '@angular/material/datepicker';


import { MatSelectModule } from "@angular/material/select";
import { DoctorListingComponent } from "app/doctor-listing/doctor-listing.component";
import { DiagnosticCenterComponent } from "app/diagnostic-center/diagnostic-center.component";
import { HomeCareComponent } from "app/home-care/home-care.component";
import { MedicalInsuranceComponent } from "app/medical-insurance/medical-insurance.component";
import { DoctorCardComponent } from "app/doctor-listing/doctor-card/doctor-card.component";
import { BookAppointmentComponent } from "app/doctor-listing/book-appointment/book-appointment.component";
import { AppointmentListComponent } from "app/doctor-listing/appointment-list/appointment-list.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatToolbarModule,
    MatOptionModule,
    MatCommonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    DoctorListingComponent,
    DiagnosticCenterComponent,
    NotificationsComponent,
    UpgradeComponent,
    HomeCareComponent,
    MedicalInsuranceComponent,
    DoctorCardComponent,
    BookAppointmentComponent,
    AppointmentListComponent
  ],
})
export class AdminLayoutModule { }
