import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextLinksComponent } from './context-links.component';

describe('ContextLinksComponent', () => {
  let component: ContextLinksComponent;
  let fixture: ComponentFixture<ContextLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
