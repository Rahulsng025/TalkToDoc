import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: String = 'users';

  getRole() {
    return this.username;
  }
  constructor() { }
}
