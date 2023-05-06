import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServofferviewComponent } from './servofferview.component';

describe('ServofferviewComponent', () => {
  let component: ServofferviewComponent;
  let fixture: ComponentFixture<ServofferviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServofferviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServofferviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
