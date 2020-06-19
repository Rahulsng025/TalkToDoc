import { Component, OnInit, Renderer2 } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'app/Services/authentication.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from "angular2-flash-messages";
//Social Login
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


enum Roles {
  "Doctor",
  "User",
  "Diagnostic Center Owner"
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  role: Roles;

  username: String;
  password: String;

  constructor(private authenticationService: AuthenticationService,
    private authService: AuthService,
    private router: Router,
    private FlashMessage: FlashMessagesService) { }


  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }

    this.authenticationService.authenticateUser(user, this.getRole()).subscribe(data => {
      if (data.success) {
        this.authenticationService.storeData(data.token, data.user);
        this.FlashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 500 });
        this.router.navigate(['/main/dashboard']);
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

  getRole() {
    if (this.role === Roles.Doctor) return "Doctor";
    else if (this.role === Roles.User) return "User";
    else return "diagnostics";
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
