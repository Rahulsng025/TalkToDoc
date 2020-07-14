import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
import { TableListComponent } from "../../table-list/table-list.component";
import { TypographyComponent } from "../../typography/typography.component";
import { IconsComponent } from "../../icons/icons.component";

import { NotificationsComponent } from "../../notifications/notifications.component";

import { DiagnosticCenterComponent } from "app/diagnostic-center/diagnostic-center.component";
import { DoctorListingComponent } from "app/doctor-listing/doctor-listing.component";
import { HomeCareComponent } from "app/home-care/home-care.component";
import { MedicalInsuranceComponent } from "app/medical-insurance/medical-insurance.component";
import { BookAppointmentComponent } from "app/doctor-listing/book-appointment/book-appointment.component";
import { AppointmentListComponent } from "app/doctor-listing/appointment-list/appointment-list.component";
import { AppointmentDetailsComponent } from "app/doctor-listing/appointment-list/appointment-details/appointment-details.component";
import { AdminComponent } from "app/admin/admin.component";
import { DoctorAdminComponent } from "app/admin/doctor-admin/doctor-admin.component";
import { DiagnosticAdminComponent } from "app/admin/diagnostic-admin/diagnostic-admin.component";
import { DoctorsPagelayoutComponent } from "app/admin/doctor-admin/doctors-pagelayout/doctors-pagelayout.component";
import { HomecareAdminComponent } from "app/admin/homecare-admin/homecare-admin.component";
import { HomecareLayoutComponent } from "app/admin/homecare-admin/homecare-layout/homecare-layout.component";
import { DiagnosticLayoutComponent } from 'app/admin/diagnostic-admin/diagnostic-layout/diagnostic-layout.component';
import { MedicalAdminComponent } from 'app/admin/medical-admin/medical-admin.component';
import { MedicalLayoutComponent } from 'app/admin/medical-admin/medical-layout/medical-layout.component';
import { AppointmentAdminComponent } from 'app/admin/appointment-admin/appointment-admin.component';
import { AuthGuard } from 'app/auth/guards/auth.gaurd';
import { UserRegistrationComponent } from "app/admin/user-registration/user-registration.component";
import { DoctorRegistrationComponent } from "app/admin/doctor-registration/doctor-registration.component";
import { DiagnosticRegistrationComponent } from "app/admin/diagnostic-registration/diagnostic-registration.component";

import { HomecareAppointmentAdminComponent } from 'app/admin/homecare-appointment-admin/homecare-appointment-admin.component';
import { BookTestComponent } from "app/book-test/book-test.component";
import { DoctorsComponent } from "app/doctor-listing/doctors/doctors.component";
import { LipidProfileComponent } from "app/book-test/lipid-profile/lipid-profile.component";
import { LiverProfileComponent } from "app/book-test/liver-profile/liver-profile.component";
import { BloodSugarComponent } from "app/book-test/blood-sugar/blood-sugar.component";
import { PaitentDetailsComponent } from "app/book-test/paitent-details/paitent-details.component";
import { BooktestAdminComponent } from 'app/admin/booktest-admin/booktest-admin.component';
import { BooktestqueryComponent } from "app/admin/booktestquery/booktestquery.component";
import { BooktestcontactComponent } from "app/admin/booktestcontact/booktestcontact.component";
import { ContactComponent } from 'app/admin/Contact/contact.component';
import { AddDoctorsComponent } from 'app/add-doctors/add-doctors.component';
import { DoctorComponent } from "app/admin/doctor/doctor.component";



export const AdminLayoutRoutes: Routes = [
  { path: "diagnostic-center", component: DiagnosticCenterComponent },
  { path: "book-test", component: BookTestComponent },

  { path: "doctor-listing", component: DoctorListingComponent },
  { path: "home-care", component: HomeCareComponent },
  { path: "medical-insurance", component: MedicalInsuranceComponent },
  { path: "book-appointment", component: BookAppointmentComponent },
  { path: "appointment-list", component: AppointmentListComponent },
  { path: "appointment-details", component: AppointmentDetailsComponent },
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "Doctors", component: DoctorsComponent },
  { path: "lipid-profile", component: LipidProfileComponent },
  { path: "liver-profile", component: LiverProfileComponent },
  { path: "blood-sugar", component: BloodSugarComponent },
  { path: "paitent-details", component: PaitentDetailsComponent },
  { path: "add-doctors", component: AddDoctorsComponent },


  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "doctors", component: DoctorAdminComponent },
      { path: "doctors-pagelayout", component: DoctorsPagelayoutComponent },
      { path: "diagnostic", component: DiagnosticAdminComponent },
      { path: "diagnostic-layout", component: DiagnosticLayoutComponent },
      { path: "homecare", component: HomecareAdminComponent },
      { path: "homecare-layout", component: HomecareLayoutComponent },
      { path: "medical", component: MedicalAdminComponent },
      { path: "medical-layout", component: MedicalLayoutComponent },
      { path: "appointment", component: AppointmentAdminComponent },
      { path: "user", component: UserRegistrationComponent },
      { path: "doctor", component: DoctorRegistrationComponent },
      { path: "Diagnostic", component: DiagnosticRegistrationComponent },
      { path: "homecareappointment", component: HomecareAppointmentAdminComponent },
      { path: "booktest", component: BooktestAdminComponent },
      { path: "booktestquery", component: BooktestqueryComponent },
      { path: "booktestcontact", component: BooktestcontactComponent },
      { path: "contact", component: ContactComponent },
      { path: "adddoctors", component: DoctorComponent }
    ],
  },
];
