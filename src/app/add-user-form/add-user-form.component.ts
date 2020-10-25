import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { User, UserService } from '../services/user.service';

interface DialogData {
  user: User;
}

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private usersService: UserService
  ) { }

  ngOnInit(): void {
    const user = this.data?.user;
    this.profileForm = new FormGroup({
      name: new FormControl(user?.name || ''),
      birthDate: new FormControl(user?.birthDate || ''),
      country: new FormControl(user?.country || ''),
      address: new FormControl(user?.address || ''),
      salary: new FormControl(user?.salary || ''),
      isActive: new FormControl(user?.isActive || ''),
    });
  }

  onSubmit() {
    const user = this.data?.user;
    this.usersService.updateUsersList(this.profileForm.value, user?.id);
    this.dialogRef.close();
  }
}