import { Routes } from '@angular/router';

import { EquipmentComponent} from './equipment/equipment.component';
import { ManagerComponent} from './manager/manager.component';
import { LoginComponent} from './login/login.component';
import {authGuard} from './guard/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentComponent, canActivate: [authGuard] }, // Protected route
  { path: 'manager', component: ManagerComponent, canActivate: [authGuard] },   // Protected route
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/login' },
];
