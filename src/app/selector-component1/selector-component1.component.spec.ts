import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent1Component } from './selector-component1.component';

describe('SelectorComponent1Component', () => {
  let component: SelectorComponent1Component;
  let fixture: ComponentFixture<SelectorComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent1Component]
    });
    fixture = TestBed.createComponent(SelectorComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
