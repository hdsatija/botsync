import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotfirstComponent } from './robotfirst.component';

describe('RobotfirstComponent', () => {
  let component: RobotfirstComponent;
  let fixture: ComponentFixture<RobotfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
