import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";





import { AppComponent } from "./app.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TableListComponent } from "./table-list/table-list.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";

import { NotificationsComponent } from "./notifications/notifications.component";

import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { DoctorListingService } from "./Services/doctorlisting.service";
import { DiagnosticAdminComponent } from './admin/diagnostic-admin/diagnostic-admin.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, DiagnosticAdminComponent],
  providers: [DoctorListingService],
  bootstrap: [AppComponent],
})
export class AppModule { }
