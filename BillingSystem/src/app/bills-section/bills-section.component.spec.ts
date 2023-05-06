import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsSectionComponent } from './bills-section.component';

describe('BillsSectionComponent', () => {
  let component: BillsSectionComponent;
  let fixture: ComponentFixture<BillsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
