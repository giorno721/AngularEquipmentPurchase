import { Component } from '@angular/core';
import {ShowEquipmentComponent} from './show-equipment/show-equipment.component';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [
    ShowEquipmentComponent
  ],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css'
})
export class EquipmentComponent {

}
