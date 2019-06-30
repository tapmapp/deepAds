import { Component, OnInit } from '@angular/core';

// SERVICES
import { UsersService } from '../../../services/users.service';

// INTERFACES
import { User } from '../../../interfaces/user.interface';
import { Observable } from '../../../../../node_modules/rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: Observable<User[]>;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.users;
  }

}
