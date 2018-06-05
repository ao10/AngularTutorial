import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // This variable is an Array holding Objects of the type, User.
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService
    .getUsers()
    .subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
