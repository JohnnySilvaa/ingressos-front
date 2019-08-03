import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutSidenavComponent } from './home-layout-sidenav.component';

describe('HomeLayoutSidenavComponent', () => {
  let component: HomeLayoutSidenavComponent;
  let fixture: ComponentFixture<HomeLayoutSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLayoutSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLayoutSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
