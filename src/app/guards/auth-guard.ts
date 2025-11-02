import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

// Est appeler par le routeur avant d'activer une route protégée
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.loggedIn) {
    console.log('User not logged in, access denied');
    router.navigate(['/login']);
    return false;
  }

  const expectedRole = route.data['role'];
  // Si la route ne demande pas de rôle, on laisse passer (l'utilisateur est connecté)
  if (!expectedRole) {
    console.log('No specific role required, access granted');
    return true; 
  }

  if (expectedRole.includes(authService.currentUser?.role)) {
    console.log('Access granted for role:', authService.currentUser?.role);
    return true;
  } else {
    console.log('Access denied. User role:', authService.currentUser?.role, 'Expected one of:', expectedRole);
    router.navigate(['/login']);
    return false;
  }

};
