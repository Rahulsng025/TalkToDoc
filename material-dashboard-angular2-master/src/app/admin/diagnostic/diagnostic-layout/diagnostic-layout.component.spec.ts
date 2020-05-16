import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticLayoutComponent } from './diagnostic-layout.component';

describe('DiagnosticLayoutComponent', () => {
  let component: DiagnosticLayoutComponent;
  let fixture: ComponentFixture<DiagnosticLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
