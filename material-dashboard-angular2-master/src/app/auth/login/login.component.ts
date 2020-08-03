import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'app/Services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";
//Social Login
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

import { LoginService } from 'app/Services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: string;

  username: String;
  password: String;

  constructor(private authenticationService: AuthenticationService,
    private authService: AuthService,
    private router: Router,
    private loginService: LoginService,
    private FlashMessage: FlashMessagesService) { }


  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    // enabling nav links (when admin logs in.)
    if (this.username === 'Admin') {
      this.loginService.username = this.username;
      this.router.navigate(['main/admin/doctors']);
      return;
    }

    this.authenticationService.authenticateUser(user, this.role).subscribe(data => {
      if (data.success) {
        this.authenticationService.storeData(data.token, data.user);
        this.FlashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 500 });

        // role based routing
        if (this.role == 'users') { this.router.navigate(['/main/dashboard']); }
        else if (this.role == 'diagnostics') { this.router.navigate(['/main/diagnostic-center']); }
        else if (this.role == 'doctors') { this.router.navigate(['/main/add-doctors']); }
        else {
          this.router.navigate(['/login']);
        }
      }
      else {
        this.FlashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['/login']);
      }
    });
  }

  //Navigate to the registration page.
  onLoadPage() {
    this.router.navigate(['/register']);
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.router.navigate(['/main/dashboard']);
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
