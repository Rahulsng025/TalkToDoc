import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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

import { MatInputModule } from "@angular/material/input";
import {
  MatRippleModule,
  MatOptionModule,
  MatCommonModule,
  MatNativeDateModule,
} from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSortModule } from "@angular/material/sort";
import { MatRadioModule } from "@angular/material/radio";
import { MatExpansionModule } from '@angular/material/expansion';


import { MatSelectModule } from "@angular/material/select";
import { DoctorListingComponent } from "app/doctor-listing/doctor-listing.component";
import { DiagnosticCenterComponent } from "app/diagnostic-center/diagnostic-center.component";
import { HomeCareComponent } from "app/home-care/home-care.component";
import { MedicalInsuranceComponent } from "app/medical-insurance/medical-insurance.component";
import { AppointmentListComponent } from "app/doctor-listing/appointment-list/appointment-list.component";
import { AppointmentDetailsComponent } from "app/doctor-listing/appointment-list/appointment-details/appointment-details.component"
import { AdminComponent } from "app/admin/admin.component";
import { DoctorAdminComponent } from "app/admin/doctor-admin/doctor-admin.component";
import { DiagnosticAdminComponent } from "app/admin/diagnostic-admin/diagnostic-admin.component";
import { HomecareAdminComponent } from "app/admin/homecare-admin/homecare-admin.component";
import { DoctorsPagelayoutComponent } from "app/admin/doctor-admin/doctors-pagelayout/doctors-pagelayout.component";
import { HomecareLayoutComponent } from 'app/admin/homecare-admin/homecare-layout/homecare-layout.component';
import { MedicalAdminComponent } from 'app/admin/medical-admin/medical-admin.component';
import { MedicalLayoutComponent } from 'app/admin/medical-admin/medical-layout/medical-layout.component';

import { DiagnosticLayoutComponent } from 'app/admin/diagnostic-admin/diagnostic-layout/diagnostic-layout.component';
import { AppointmentAdminComponent } from "app/admin/appointment-admin/appointment-admin.component";
import { UserRegistrationComponent } from 'app/admin/user-registration/user-registration.component';
import { DoctorRegistrationComponent } from "app/admin/doctor-registration/doctor-registration.component";
import { DiagnosticRegistrationComponent } from 'app/admin/diagnostic-registration/diagnostic-registration.component';
import { HomecareAppointmentAdminComponent } from "app/admin/homecare-appointment-admin/homecare-appointment-admin.component";
import { BookTestComponent } from 'app/book-test/book-test.component';
import { DoctorsComponent } from 'app/doctor-listing/doctors/doctors.component';
import { LipidProfileComponent } from 'app/book-test/lipid-profile/lipid-profile.component';
import { LiverProfileComponent } from 'app/book-test/liver-profile/liver-profile.component';
import { BloodSugarComponent } from 'app/book-test/blood-sugar/blood-sugar.component';
import { PaitentDetailsComponent } from 'app/book-test/paitent-details/paitent-details.component';
import { BooktestAdminComponent } from 'app/admin/booktest-admin/booktest-admin.component';
import { BooktestqueryComponent } from 'app/admin/booktestquery/booktestquery.component';
import { BooktestcontactComponent } from 'app/admin/booktestcontact/booktestcontact.component';
import { ContactComponent } from 'app/admin/Contact/contact.component';
import { AddDoctorsComponent } from 'app/add-doctors/add-doctors.component';
import { DoctorComponent } from 'app/admin/doctor/doctor.component';




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
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatDialogModule,
    MatGridListModule,
    MatSortModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    MatExpansionModule

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    DoctorListingComponent,
    DoctorsComponent,
    DiagnosticCenterComponent,
    NotificationsComponent,

    HomeCareComponent,
    MedicalInsuranceComponent,
    AppointmentListComponent,
    AppointmentDetailsComponent,
    AdminComponent,
    DoctorAdminComponent,
    DoctorsPagelayoutComponent,
    DiagnosticAdminComponent,
    HomecareAdminComponent,
    HomecareLayoutComponent,
    DiagnosticLayoutComponent,
    MedicalAdminComponent,
    MedicalLayoutComponent,
    AppointmentAdminComponent,
    UserRegistrationComponent,
    DoctorRegistrationComponent,
    DiagnosticRegistrationComponent,
    HomecareAppointmentAdminComponent,
    BookTestComponent,
    DoctorsComponent,
    LipidProfileComponent,
    LiverProfileComponent,
    BloodSugarComponent,
    PaitentDetailsComponent,
    BooktestAdminComponent,
    BooktestqueryComponent,
    BooktestcontactComponent,
    ContactComponent,
    AddDoctorsComponent,
    DoctorComponent



  ],
})
export class AdminLayoutModule { }
