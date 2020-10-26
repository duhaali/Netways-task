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
  userProfilePicture;

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
      profilePicture: new FormControl(user?.profilePicture || null)
    });
  }

  onSubmit() {
    const user = this.data?.user;
    const newUser: User = {
      ...this.profileForm.value,
      profilePicture: this.userProfilePicture
    }
    this.usersService.updateUsersList(newUser, user?.id);
    this.dialogRef.close();
  }

  setImage(event) {
    const file = event.target.files[0];
    
    const fileReader = new FileReader();
    fileReader.onload = e => {
      this.userProfilePicture = e.target.result;
    }
    fileReader.readAsDataURL(file);
  }
}