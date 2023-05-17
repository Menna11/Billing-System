import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServofferComponent } from './servoffer.component';

describe('ServofferComponent', () => {
  let component: ServofferComponent;
  let fixture: ComponentFixture<ServofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
