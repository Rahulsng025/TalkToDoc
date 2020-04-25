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
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import {
  MatRippleModule,
  MatOptionModule,
  MatCommonModule,
} from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatToolbarModule } from "@angular/material/toolbar";

import { MatSelectModule } from "@angular/material/select";
import { DoctorListingComponent } from "app/doctor-listing/doctor-listing.component";
import { DiagnosticCenterComponent } from "app/diagnostic-center/diagnostic-center.component";
import { HomeCareComponent } from "app/home-care/home-care.component";
import { MedicalInsuranceComponent } from "app/medical-insurance/medical-insurance.component";
import { DoctorCardComponent } from "app/doctor-listing/doctor-card/doctor-card.component";
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
  ],
})
export class AdminLayoutModule {}
