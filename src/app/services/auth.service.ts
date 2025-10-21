import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

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
  private router = inject(Router);

  private users: User[] = [
    { login: 'user', password: 'user', role: 'user' },
    { login: 'admin', password: 'admin', role: 'admin' }
  ];

  logIn(login: string, password: string): boolean {
    const user = this.users.find(u => u.login === login && u.password === password);
    if (user) {
      this.loggedIn = true;
      this.currentUser = user;
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logOut() {
    this.loggedIn = false;
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

}
