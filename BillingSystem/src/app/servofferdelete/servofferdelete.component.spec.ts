import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServofferdeleteComponent } from './servofferdelete.component';

describe('ServofferdeleteComponent', () => {
  let component: ServofferdeleteComponent;
  let fixture: ComponentFixture<ServofferdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServofferdeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServofferdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
