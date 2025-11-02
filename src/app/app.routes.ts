import { Routes } from '@angular/router';
import { Assignment } from './components/assignment/assignment';
import { AddAssignment } from './components/add-assignment/add-assignment';
import {CreateData} from './components/create-data/create-data';
import {Login} from './components/login/login';
import { authGuard } from './guards/auth-guard';
import { EditAssignment } from './components/edit-assignment/edit-assignment';

export const routes: Routes = [
    { path: '', redirectTo: '/assignments', pathMatch: 'full' },
    { path: 'assignments', component: Assignment },
    { path: 'add-assignment', component: AddAssignment, canActivate: [authGuard], data: { role: 'admin' } },
    { path: 'create-data', component: CreateData, canActivate: [authGuard] },
    { path: 'edit-assignment/:_id', component: EditAssignment, canActivate: [authGuard], data: { role: 'admin' } },
    { path: 'login', component: Login }
];
