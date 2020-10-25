import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})

export class AddUserFormComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    BirthDate: new FormControl(''),
    Country: new FormControl(''),
    Address: new FormControl(''),
    Salary: new FormControl(''),
    isActive: new FormControl(''),

  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.profileForm.value);
  }
}
