import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBillComponent } from './phone-bill.component';

describe('PhoneBillComponent', () => {
  let component: PhoneBillComponent;
  let fixture: ComponentFixture<PhoneBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
