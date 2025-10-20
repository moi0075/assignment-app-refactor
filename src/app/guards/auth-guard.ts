import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  // if (AuthService.loggedIn) {
  //   return true;
  // } else {
  //   console.log('Access denied - Users must be logged in to access this page');
  //   return false;
  // }
  return true;
};
