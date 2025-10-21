import { Routes } from '@angular/router';
import { Assignment } from './components/assignment/assignment';
import { AddAssignment } from './components/add-assignment/add-assignment';
import {CreateData} from './components/create-data/create-data';
import {Login} from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: '/assignments', pathMatch: 'full' },
    { path: 'assignments', component: Assignment },
    { path: 'add-assignment', component: AddAssignment, canActivate: [authGuard], data: { role: 'admin' } },
    { path: 'create-data', component: CreateData, canActivate: [authGuard] },
    { path: 'login', component: Login }
];
