import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuwelijkComponent } from './huwelijk.component';

describe('HuwelijkComponent', () => {
  let component: HuwelijkComponent;
  let fixture: ComponentFixture<HuwelijkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuwelijkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuwelijkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
