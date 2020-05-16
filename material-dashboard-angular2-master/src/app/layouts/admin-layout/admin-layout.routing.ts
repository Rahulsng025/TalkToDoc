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
import { AdminComponent } from "app/admin/admin.component";
import { DoctorAdminComponent } from "app/admin/doctor-admin/doctor-admin.component";
import { DiagnosticAdminComponent } from "app/admin/diagnostic-admin/diagnostic-admin.component";
import { Component } from "@angular/core";
import { DoctorsPagelayoutComponent } from "app/admin/doctor-admin/doctors-pagelayout/doctors-pagelayout.component";
import { HomecareAdminComponent } from "app/admin/homecare-admin/homecare-admin.component";
import { HomecareLayoutComponent } from "app/admin/homecare-admin/homecare-layout/homecare-layout.component";
import { MedicalAdminComponent } from "app/admin/medical-admin/medical-admin.component";
import { MedicalLayoutComponent } from 'app/admin/medical-admin/medical-layout/medical-layout.component';
import { DiagnosticLayoutComponent } from 'app/admin/diagnostic-admin/diagnostic-layout/diagnostic-layout.component';

export const AdminLayoutRoutes: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "table-list", component: TableListComponent },
  { path: "typography", component: TypographyComponent },
  { path: "icons", component: IconsComponent },
  { path: "diagnostic-center", component: DiagnosticCenterComponent },
  { path: "doctor-listing", component: DoctorListingComponent },
  { path: "notifications", component: NotificationsComponent },

  { path: "home-care", component: HomeCareComponent },
  { path: "medical-insurance", component: MedicalInsuranceComponent },
  { path: "book-appointment", component: BookAppointmentComponent },
  { path: "appointment-list", component: AppointmentListComponent },
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
      { path: "medical-layout", component: MedicalLayoutComponent }
    ],
  },
];
