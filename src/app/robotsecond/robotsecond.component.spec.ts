import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotsecondComponent } from './robotsecond.component';

describe('RobotsecondComponent', () => {
  let component: RobotsecondComponent;
  let fixture: ComponentFixture<RobotsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
