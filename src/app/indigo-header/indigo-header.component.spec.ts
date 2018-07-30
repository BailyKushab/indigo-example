import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigoHeaderComponent } from './indigo-header.component';

describe('IndigoHeaderComponent', () => {
  let component: IndigoHeaderComponent;
  let fixture: ComponentFixture<IndigoHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigoHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
