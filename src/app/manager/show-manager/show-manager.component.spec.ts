import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowManagerComponent } from './show-manager.component';

describe('ShowManagerComponent', () => {
  let component: ShowManagerComponent;
  let fixture: ComponentFixture<ShowManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
