import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitingUserDetailsComponent } from './exiting-user-details.component';

describe('ExitingUserDetailsComponent', () => {
  let component: ExitingUserDetailsComponent;
  let fixture: ComponentFixture<ExitingUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitingUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitingUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
