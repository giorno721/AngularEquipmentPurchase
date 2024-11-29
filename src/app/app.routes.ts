import { Routes } from '@angular/router';

import { EquipmentComponent} from './equipment/equipment.component';
import { ManagerComponent} from './manager/manager.component';

export const routes: Routes = [
  { path: 'equipment', component: EquipmentComponent},
  { path: 'manager', component: ManagerComponent}
];
