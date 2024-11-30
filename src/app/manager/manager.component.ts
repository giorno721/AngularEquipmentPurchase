import { Component } from '@angular/core';
import {ShowManagerComponent} from './show-manager/show-manager.component';

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    ShowManagerComponent
  ],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
