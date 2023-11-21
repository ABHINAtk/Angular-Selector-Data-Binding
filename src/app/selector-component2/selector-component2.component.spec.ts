import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorComponent2Component } from './selector-component2.component';

describe('SelectorComponent2Component', () => {
  let component: SelectorComponent2Component;
  let fixture: ComponentFixture<SelectorComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent2Component]
    });
    fixture = TestBed.createComponent(SelectorComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
