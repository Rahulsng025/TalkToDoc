import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from 'app/Services/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {

    }

    canActivate() {
        if (this.authenticationService.loggedIn()) {
            return true;
        } else {
            this.router.navigate(['localhost:4200/login']);
            return false;
        }
    }
}
