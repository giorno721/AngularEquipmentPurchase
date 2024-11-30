import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ApiService} from '../../apiservice.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-add-edit-manager',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './add-edit-manager.component.html',
  styleUrl: './add-edit-manager.component.css'
})
export class AddEditManagerComponent implements OnInit{
  constructor(private service: ApiService) { }

  @Input() manager: any;
  ManagerId = 0;
  Name = "";
  Surname = "";
  Base64Image = "null";
  ProfileImage: File | null = null;

  onFileSelected(event: any): void {
    this.ProfileImage = event.target.files[0];
  }
  ngOnInit(): void {
    this.ManagerId = this.manager.ManagerId;
    this.Name = this.manager.Name;
    this.Surname = this.manager.Surname;
    this.ProfileImage = this.manager.ProfileImage;
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

  addManager() {
    const formData = new FormData();
    formData.append('Name', this.Name);
    formData.append('Surname', this.Surname);
    formData.append('Base64Image', this.Base64Image)
    if (this.ProfileImage) {
      formData.append('ProfileImage', this.ProfileImage);
    }

    // Ensure you are calling the service method with the correct parameter
    this.service.addManager(formData).subscribe(res => {
      alert(res.toString());
    });
  }

  updateManager() {
    const formData = new FormData();
    formData.append('ManagerId', this.ManagerId.toString());
    formData.append('Name', this.Name);
    formData.append('Surname', this.Surname);
    formData.append('Base64Image', this.Base64Image)
    if (this.ProfileImage) {
      formData.append('ProfileImage', this.ProfileImage);
    }

    this.service.updateManager(this.ManagerId, formData).subscribe({
      next: () => alert('Manager updated successfully!'),
      error: (err) => console.error(err),
    });
  }
}
