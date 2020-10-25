import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { AddUserFormComponent } from '../add-user-form/add-user-form.component';
import { User, UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns = ['id', 'name', 'birthDate', 'country', 'address', 'isActive', 'salary', 'actions'];
  users$;

  constructor(private dialog: MatDialog, private router: Router, public usersService: UserService) { }

  ngOnInit(): void {
    // this.usersService.getUsers().subscribe(users => (this.users$ = users))
    this.users$ = this.usersService.getUsers();
  }

  openFormDialog(user?) {
    this.dialog.open(AddUserFormComponent, { data: { user } });
  }

  openProfilePage(user: User) {
    this.router.navigate(['/profile', user.id], { state: user });
  }
}

