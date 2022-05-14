import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers()
    .subscribe(users => this.users = users.filter(user => user.status === "online").sort(this.sortByUsername))
  }
  sortByUsername(a: User,b: User): number {
    let userA = a.username.toUpperCase();
    let userB = b.username.toUpperCase();
    if(userA < userB){
      return -1;
    }
    else if(userA > userB){
      return 1;
    }
    
    return 0;
  }
}
