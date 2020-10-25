import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';
import users from "../mock-data/index.json"
import { Router } from '@angular/router';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

export interface PeriodicElement {
  position: number,
  name: string,
  BirthDate: string,
  Country: string,
  Address: string,
  isActive: string,
  Salary: string,
  ProfilePicture: string
}
const ELEMENT_DATA : PeriodicElement[] = [
  {
    position: 1,
    name: "ali",
    BirthDate: "15/5/1992",
    Country: "jordan",
    Address: "Amman",
    isActive: "true",
    Salary: "800$",
    ProfilePicture: "image1.jpg"
  },
  {
    position: 2,
    name: "alaa",
    BirthDate: "1/6/1995",
    Country: "jordan",
    Address: "Amman",
    isActive: "true",
    Salary: "1000$",
    ProfilePicture: "image1.jpg"
  }
]
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'BirthDate', 'Country', 'Address', 'isActive', 'Salary', 'ProfilePicture'];
  dataSource = users;
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
  }   
  openDialog() {
    this.dialog.open(AddUserFormComponent);
  }
  openProfilePage() {
    this.router.navigate(['/profile', 23]);
  }

}

