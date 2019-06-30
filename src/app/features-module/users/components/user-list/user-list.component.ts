import { Component, OnInit } from '@angular/core';

// SERVICES
import { UsersService } from '../../../../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: Promise<Object>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.users = this.usersService.getUsers();
    
  }

}
