import { Routes } from '@angular/router';

import { EquipmentComponent} from './equipment/equipment.component';
import { ManagerComponent} from './manager/manager.component';
import { LoginComponent} from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentComponent},
  { path: 'manager', component: ManagerComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/login' },
];
