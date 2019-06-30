import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    UserComponent, 
    UsersListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent, 
    UsersListComponent
  ]
})
export class UsersModule { }
