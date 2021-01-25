import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'app/Services/user.service'
import { UserRegistrationModel } from 'app/model/user_registration.model'
import { mergeMap } from 'rxjs/operators';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  allUserRegistrationDetails: UserRegistrationModel[];
  displayedColumns = ['name', 'number', 'gender', 'email', 'username', 'action'];

  constructor(public userService: UserService,
    public router: Router) { }

  ngOnInit(): void {
    this.fetchUserDetail();
  }

  fetchUserDetail() {
    this.userService.getusers().subscribe((doctor: UserRegistrationModel[]) => {
      this.allUserRegistrationDetails = doctor;
      console.log(this.allUserRegistrationDetails);
    });
  }

  deleteusers(id: string) {
    console.log("ID:" + id);
    this.userService
      .deleteusers(id)
      .pipe(mergeMap(() => this.userService.getusers()))
      .subscribe((allUserRegistrationDetails: UserRegistrationModel[]) => {
        console.log(`Data received`);
        console.log(allUserRegistrationDetails);

        this.allUserRegistrationDetails = allUserRegistrationDetails;
      });
  }
}
