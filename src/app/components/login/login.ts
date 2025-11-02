import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [MatInputModule, MatButtonModule, FormsModule, MatFormFieldModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private router = inject(Router);
  login: string = '';
  password: string = '';

  private authService = inject(AuthService);

  onLogin() {
    console.log('Login attempted with', this.login, this.password);
    if (this.authService.logIn(this.login, this.password)) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}
