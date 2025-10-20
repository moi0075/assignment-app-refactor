import { Injectable } from '@angular/core';

interface User {
  login: string;
  password: string;
  role: 'user' | 'admin';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  currentUser: User | null = null;
  
  private users: User[] = [
    { login: 'user', password: 'user', role: 'user' },
    { login: 'admin', password: 'admin', role: 'admin' }
  ];

  login(login: string, password: string): boolean {
    const user = this.users.find(u => u.login === login && u.password === password);
    if (user) {
      this.loggedIn = true;
      this.currentUser = user;
      return true;
    }
    return false;
  }

}
