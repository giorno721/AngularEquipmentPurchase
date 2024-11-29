import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ApiService} from '../../apiservice.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-edit-equipment',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-edit-equipment.component.html',
  styleUrl: './add-edit-equipment.component.css'
})
export class AddEditEquipmentComponent implements OnInit{
  constructor(private service: ApiService) { }

  @Input() equip: any;
  Id = 0;
  EquipmentCategoryId = 0;
  Name = "";

  ngOnInit(): void {
    this.Id = this.equip.Id;
    this.EquipmentCategoryId = this.equip.EquipmentCategoryId;
    this.Name = this.equip.Name;
  }

  addEquipment() {
    var equip = {
      DepartmentName: this.Name
    };
    this.service.addEquipment(equip).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEquipment() {
    var equip = {
      Id: this.Id,
      DepartmentName: this.Name
    };
    this.service.updateEquipment(equip).subscribe(res => {
      alert(res.toString());
    });
  }

}
