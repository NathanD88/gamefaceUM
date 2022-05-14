import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const users = [
      { id: "superuser01", username: "superuser01", status: "online" },
      { id: "rambo123", username: "rambo123", status: "offline" },
      { id: "sly-guy", username: "sly-guy", status: "online" },
      { id: "fToast", username: "fToast", status: "online" },
      { id: "canBacon", username: "canBacon", status: "online" },
      { id: "tester05", username: "tester05", status: "offline" },
      { id: "lackey76", username: "lackey76", status: "online" },
      { id: "sleazyPete", username: "sleazyPete", status: "online" },
      { id: "grunt4u", username: "grunt4u", status: "offline" },
      { id: "hiredCoder", username: "hiredCoder", status: "online" },
      { id: "DollarDan", username: "DollarDan", status: "online" },
      { id: "superMouse", username: "superMouse", status: "offline" },
      { id: "keyboard", username: "keyboard", status: "offline" },
      { id: "placeholder", username: "placeholder", status: "offline" },
      { id: "alwaysOffline", username: "alwaysOffline", status: "offline" },
    ];
    return {users}
  }
}
