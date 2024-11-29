import {Component, OnInit} from '@angular/core';
import { ApiService} from '../../apiservice.service';
import {AddEditEquipmentComponent} from '../add-edit-equipment/add-edit-equipment.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-show-equipment',
  standalone: true,
  imports: [
    AddEditEquipmentComponent,
    FormsModule,
    NgIf,
    NgForOf
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

  EquipmentIdFilter = "";
  EquipmentNameFilter = "";
  EquipmentListWithoutFilter: any = [];

  ngOnInit(): void {
    this.refreshEquipList();
  }

  addClick() {
    this.equip = {
      Id: "0",
      EquipmentCategoryId: "",
      Name: "",
      Description: ""
    }
    this.ModalTitle = "Add Equipment";
    this.ActivateAddEditEquipComp = true;
  }

  editClick(item : any) {
    this.equip = item;
    this.ModalTitle = "Edit Department";
    this.ActivateAddEditEquipComp = true;
  }

  deleteClick(item: any) {
    if (confirm('Are you sure??')) {
      this.service.deleteEquipment(item.Id).subscribe(data => {
        alert(data.toString());
        this.refreshEquipList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditEquipComp = false;
    this.refreshEquipList();
  }

  refreshEquipList() {
    this.service.getEquipmentList().subscribe(data => {
      this.EquipmentList = data;
      console.log(data);
      this.EquipmentListWithoutFilter = data;
    });
  }

  sortResult(prop: any, asc: any) {
    this.EquipmentList = this.EquipmentListWithoutFilter.sort(function (a: any, b: any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
      }
      else {
        return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
      }
    });
  }

  FilterFn() {
    var EquipmentIdFilter = this.EquipmentIdFilter;
    var EquipmentNameFilter = this.EquipmentNameFilter;

    this.EquipmentList = this.EquipmentListWithoutFilter.filter(
      function (el: any) {
        return el.Id.toString().toLowerCase().includes(
            EquipmentIdFilter.toString().trim().toLowerCase()
          ) &&
          el.Name.toString().toLowerCase().includes(
            EquipmentNameFilter.toString().trim().toLowerCase())
      }
    );
  }
}
