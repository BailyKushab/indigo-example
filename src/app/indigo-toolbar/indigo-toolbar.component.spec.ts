import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigoToolbarComponent } from './indigo-toolbar.component';

describe('IndigoToolbarComponent', () => {
  let component: IndigoToolbarComponent;
  let fixture: ComponentFixture<IndigoToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndigoToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
