import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/Services/authentication.service';
import { Router } from '@angular/router';

//Social Login
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //Social Login
  private user: SocialUser;
  private loggedIn: boolean;



  users: Object;

  constructor(private authenticationService: AuthenticationService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    //     this.authenticationService.getProfile().subscribe(profile => {
    //       this.users = profile.role;
    //     },
    //       err => {
    //         console.log(err);
    //         return false;
    //       });
    //   }
    // }

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
}







