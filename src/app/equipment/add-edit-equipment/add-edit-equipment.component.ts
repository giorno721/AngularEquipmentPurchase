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
  EquipmentCategoryId = 1;
  Name = "";
  Expiry = "";
  Description = "";
  BrandId = 1;
  Model = "";

  ngOnInit(): void {
    this.Id = this.equip.Id;
    this.EquipmentCategoryId = this.equip.EquipmentCategoryId;
    this.Name = this.equip.Name;
  }
  // Field interaction tracking
  fieldInteraction: { [key: string]: boolean } = {};

  // Method to track user interaction
  onInputChange(field: string) {
    this.fieldInteraction[field] = true;
  }

  // Check if a field is invalid and the user has interacted with it
  isFieldInvalid(field: string): boolean {
    return !!this.fieldInteraction[field];
  }

  addEquipment() {
    var equip = {
      EquipmentCategoryId: this.EquipmentCategoryId,
      Name: this.Name,
      Expiry: this.Expiry,
      Description: this.Description,
      BrandId: this.BrandId,
      Model: this.Model
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
