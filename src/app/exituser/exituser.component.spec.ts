import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExituserComponent } from './exituser.component';

describe('ExituserComponent', () => {
  let component: ExituserComponent;
  let fixture: ComponentFixture<ExituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExituserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
