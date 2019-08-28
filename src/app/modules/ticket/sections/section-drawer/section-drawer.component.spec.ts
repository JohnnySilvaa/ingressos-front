import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDrawerComponent } from './section-drawer.component';

describe('SectionDrawerComponent', () => {
  let component: SectionDrawerComponent;
  let fixture: ComponentFixture<SectionDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
