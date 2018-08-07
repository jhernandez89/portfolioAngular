import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWithProjectsComponent } from './landing-with-projects.component';

describe('LandingWithProjectsComponent', () => {
  let component: LandingWithProjectsComponent;
  let fixture: ComponentFixture<LandingWithProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingWithProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingWithProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
