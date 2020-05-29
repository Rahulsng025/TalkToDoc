import { Component, OnInit } from '@angular/core';
import { ValidateService } from "app/Services/validate.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthenticationService } from 'app/Services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  number: String;
  gender: String;
  email: String;
  username: String;
  password: String;

  constructor(private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }
  onRegisterSubmit() {
    const user = {
      name: this.name,
      number: this.number,
      gender: this.gender,
      email: this.email,
      username: this.username,
      password: this.password,

    }

    //Required Fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
      this.flashMessagesService.grayOut(true);
      return false;
    }

    //Valid Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }
    //Register User
    this.authenticationService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessagesService.show('You are now registered and can now login', { cssClass: 'alert-success', timeout: 3000 });

        this.router.navigate(['/login']);
      } else {
        this.flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });
  }
}
