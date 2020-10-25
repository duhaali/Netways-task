import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User;

  constructor(private router: Router) {
    const user = <User>this.router.getCurrentNavigation().extras.state;
    this.user = user;
  }
}
