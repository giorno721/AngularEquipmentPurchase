import {Component, OnInit} from '@angular/core';
import {AddEditManagerComponent} from '../add-edit-manager/add-edit-manager.component';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from '@angular/forms';
import  {ApiService} from '../../apiservice.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-show-manager',
  standalone: true,
    imports: [
        AddEditManagerComponent,
        FormsModule,
        NgForOf,
        NgIf,
        NgxPaginationModule
    ],
  templateUrl: './show-manager.component.html',
  styleUrl: './show-manager.component.css'
})
export class ShowManagerComponent implements OnInit{
  constructor(private service: ApiService) { }

  ManagerList: any = [];
  ModalTitle = "";
  ActivateAddEditManagerComp: boolean = false;
  manager: any;
  currentPage: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items per page

  ngOnInit(): void {
    this.refreshManagerList();
  }

  addClick() {
    this.manager = {
      ManagerId: 0,
      Name: "",
      Surname: "",
    }
    this.ModalTitle = "Add Manager";
    this.ActivateAddEditManagerComp = true;
  }

  editClick(item : any) {
    this.manager = item;
    this.ModalTitle = "Edit Manager";
    this.ActivateAddEditManagerComp = true;
  }

  closeClick() {
    this.ActivateAddEditManagerComp = false;
    this.refreshManagerList();
  }

  refreshManagerList() {
    this.service.getManagerList().subscribe(data => {
      this.ManagerList = data;
      console.log(data);
    });
  }
}
