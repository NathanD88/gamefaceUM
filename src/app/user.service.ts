import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];
  private usersUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient, 
    private messageService: MessageService) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      //tap(users => this.users = users)
    );
  }
  getUser(userId: string): Observable<User> {
    const url = `${this.usersUrl}/${userId}`;
    return this.http.get<User>(url, this.httpOptions).pipe(
      //tap(user => this.log(`retrieved user: ${user}`))
    )
  }
  createUser(user: User): Observable<User> {
    user.id = user.username;
    
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      //tap((newUser: User) => this.users.push(newUser))
    )
  }
  deleteUser(username: string): Observable<User>{
    const url = `${this.usersUrl}/${username}`;
    this.users = this.users.filter(u => u.username !== username)
    return this.http.delete<User>(url, this.httpOptions).pipe(
      //tap(_ => this.log(`deleted user:${username}`))
    );
  }
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, this.httpOptions).pipe(
      //tap(_ => this.log(`user updated: ${user.username} - ${user.status}`))
    )
  }
  searchUser(term: string): Observable<User> {
    if(!term.trim()) {
      return of();
    }
    return this.http.get<User>(`${this.usersUrl}/?name=${term}`).pipe(
      tap(x => x !== null ? this.log(`found users`) : this.log(`no users found`))
    )
  }
  searchUsers(term: string): Observable<User[]> {
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<User[]>(`${this.usersUrl}/?username=${term}`)
  }
  private log(message: string) {
    this.messageService.add(message)
  }
}
