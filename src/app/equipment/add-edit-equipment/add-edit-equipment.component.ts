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
  EquipmentId = 0;
  EquipmentCategoryId = 1;
  Name = "";
  Expiry = "";
  Description = "";
  BrandId = 1;
  Model = "";

  ngOnInit(): void {
    this.EquipmentId = this.equip.EquipmentId;
    this.EquipmentCategoryId = this.equip.EquipmentCategoryId;
    this.Name = this.equip.Name;
    this.Expiry = this.equip.Expiry;
    this.Description = this.equip.Description;
    this.BrandId = this.equip.BrandId;
    this.Model = this.equip.Model;
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
      EquipmentId: this.EquipmentId,
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
      EquipmentId: this.EquipmentId,
      EquipmentCategoryId: this.EquipmentCategoryId,
      Name: this.Name,
      Expiry: this.Expiry,
      Description: this.Description,
      BrandId: this.BrandId,
      Model: this.Model
    };
    this.service.updateEquipment(this.EquipmentId, equip).subscribe({
      next: () => {
        alert('Equipment updated successfully!');
      },
      error: (err) => {
        console.error('Error updating equipment:', err);
        alert('Failed to update equipment.');
      }
    });
  }

}
