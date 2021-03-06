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
import { DiagnosticLayoutComponent } from './admin/diagnostic/diagnostic-layout/diagnostic-layout.component';
import { NavigationComponent } from 'app/auth/navigation/navigation.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './auth/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { ValidateService } from "app/Services/validate.service";
import { AuthenticationService } from 'app/Services/authentication.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ProfileComponent } from './auth/profile/profile.component';
import { AuthGuard } from "app/auth/guards/auth.gaurd";
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


//Social login
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ContactComponent } from 'app/auth/contact/contact.component';
import { AboutComponent } from 'app/auth/about/about.component';
import { WhyusComponent } from './auth/whyus/whyus.component';






let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("287086951134-teihdlr84kr5haq0u0h4482cnfmasi8j.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("706276323536977")
  }
]);
export function provideConfig() {
  return config;
}

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
    FlashMessagesModule.forRoot(),
    SocialLoginModule,
    MatIconModule,
    MatExpansionModule,
    NgbModule,
    ReactiveFormsModule,
    MatTableModule,
    MatGridListModule,
    MatButtonModule

  ],

  declarations: [AppComponent,
    AdminLayoutComponent,
    DiagnosticLayoutComponent,
    NavigationComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    ContactComponent,
    AboutComponent,
    WhyusComponent,






  ],

  providers: [DoctorListingService, ValidateService, AuthenticationService, AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
