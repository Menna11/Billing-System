import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminwalletComponent } from './adminwallet.component';

describe('AdminwalletComponent', () => {
  let component: AdminwalletComponent;
  let fixture: ComponentFixture<AdminwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminwalletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
