import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigoSidenavComponent } from './indigo-sidenav.component';

describe('IndigoSidenavComponent', () => {
  let component: IndigoSidenavComponent;
  let fixture: ComponentFixture<IndigoSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigoSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
