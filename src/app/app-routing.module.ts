import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,  RouterModule  } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'profile/:id', component: UserProfileComponent },
  { path: '', component: UsersComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
