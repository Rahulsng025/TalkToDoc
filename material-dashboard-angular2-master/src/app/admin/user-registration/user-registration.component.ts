import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'app/Services/user.service'
import { UserRegistrationModel } from 'app/model/user_registration.model'


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  allUserRegistrationDetails: UserRegistrationModel[];
  displayedColumns = ['name', 'number', 'gender', 'email', 'username'];

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchUserDetail();
  }

  fetchUserDetail() {
    this.userService.getusers().subscribe((doctor: UserRegistrationModel[]) => {
      this.allUserRegistrationDetails = doctor;
      console.log(this.allUserRegistrationDetails);
    });

  }
}
