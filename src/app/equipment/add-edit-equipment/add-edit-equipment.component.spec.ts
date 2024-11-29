import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEquipmentComponent } from './add-edit-equipment.component';

describe('AddEditEquipmentComponent', () => {
  let component: AddEditEquipmentComponent;
  let fixture: ComponentFixture<AddEditEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
