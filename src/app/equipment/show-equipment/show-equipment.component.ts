import {Component, OnInit} from '@angular/core';
import { ApiService} from '../../apiservice.service';
import {AddEditEquipmentComponent} from '../add-edit-equipment/add-edit-equipment.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-show-equipment',
  standalone: true,
  imports: [
    AddEditEquipmentComponent,
    FormsModule,
    NgIf,
    NgForOf,
    NgxPaginationModule
  ],
  templateUrl: './show-equipment.component.html',
  styleUrl: './show-equipment.component.css'
})
export class ShowEquipmentComponent implements OnInit{
  constructor(private service: ApiService) { }

  EquipmentList: any = [];
  ModalTitle = "";
  ActivateAddEditEquipComp: boolean = false;
  equip: any;
  currentPage: number = 1;
  itemsPerPage: number = 10;


  ngOnInit(): void {
    this.refreshEquipList();
  }

  addClick() {
    this.equip = {
      EquipmentId: "0",
      EquipmentCategoryId: "",
      Name: "",
      Expiry: "",
      Description: "",
      BrandId: "",
      Model: ""
    }
    this.ModalTitle = "Add Equipment";
    this.ActivateAddEditEquipComp = true;
  }

  editClick(item : any) {
    this.equip = item;
    this.ModalTitle = "Edit Equipment";
    this.ActivateAddEditEquipComp = true;
  }

  closeClick() {
    this.ActivateAddEditEquipComp = false;
    this.refreshEquipList();
  }

  refreshEquipList() {
    this.service.getEquipmentList().subscribe(data => {
      this.EquipmentList = data;
      console.log(data);
    });
  }
}
