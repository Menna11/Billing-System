import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminelecComponent } from './adminelec.component';

describe('AdminelecComponent', () => {
  let component: AdminelecComponent;
  let fixture: ComponentFixture<AdminelecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminelecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
