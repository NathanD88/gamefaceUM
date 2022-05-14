import { Component } from '@angular/core';
import { MessageService } from './message.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public messageService: MessageService,
    private userService: UserService
  ) {}

  title = 'gameface-um';
  searchedUser = '';
  defaultUser = '';

  searchUser(term:string): void {
    this.searchedUser = term;
    
  }
}
