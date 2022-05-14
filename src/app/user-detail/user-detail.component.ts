import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  faUser = faUser;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(): void {
    const userId = this.route.snapshot.paramMap.get('user') as string;
    this.userService.getUser(userId)
      .subscribe(user => this.user = user)
  }
  goBack(): void {
    this.location.back();
  }
  handleChange(selector: HTMLSelectElement): void {
    console.log(this.user)
    if(this.user){
      console.log(selector.value)
      this.user.status = selector.value;
      console.log(this.user)
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack())
    }
  }
}
