import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  user: object
  constructor() { }
  addNewUser(user) {
    console.log('uesr', user);
    this.user = user
  }
  getUser() {
    return this.user;
  }
}
