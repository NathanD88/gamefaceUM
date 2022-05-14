import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = []
  faTrash = faTrash;
  constructor(private userService: UserService, public messageService: MessageService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe( users => this.users = users)
  }
  addUser(username: string): void {
    username = username.trim();
    if(!username) {return;}
    let newUser = {username} as User;
    newUser.status = "offline";
    this.userService.createUser(newUser)
      .subscribe(user => this.users.push(user))
  }
  deleteUser(user: User): void {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.username).subscribe();
  }

  log(message:string): void {
    this.messageService.add(message);
  }
}
