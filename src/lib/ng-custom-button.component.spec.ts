import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomButtonComponent } from './ng-custom-button.component';

describe('NgCustomButtonComponent', () => {
  let component: NgCustomButtonComponent;
  let fixture: ComponentFixture<NgCustomButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCustomButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCustomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
