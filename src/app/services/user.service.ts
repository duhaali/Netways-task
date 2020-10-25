import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

import USERS from "../mock-data/index.json";

export interface User {
  id: number;
  name: string;
  birthDate: string;
  country: string;
  address: string;
  isActive: string;
  salary: string;
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  private usersSubject: BehaviorSubject<User[]>;

  constructor() {
    // @ts-ignore
    this.usersSubject = new BehaviorSubject(USERS);
  }

  getUsers() {
    return this.usersSubject.asObservable();
  }

  updateUsersList(user: User, userId: number) {
    if (userId) {
      this.updateUser(user, userId);
    } else {
      this.addUser(user);
    }
  }

  private addUser(user: User) {
    const users = this.usersSubject.getValue();
    users.push({
      id: users.length,
      ...user
    });
    this.usersSubject.next(users);
  }

  private updateUser(user: User, userId: number) {
    const users = this.usersSubject.getValue();
    const newUsers = users.map(_user => _user.id === userId ? user : _user);
    this.usersSubject.next(newUsers);
  }
}