import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticAdminComponent } from './diagnostic-admin.component';

describe('DiagnosticAdminComponent', () => {
  let component: DiagnosticAdminComponent;
  let fixture: ComponentFixture<DiagnosticAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosticAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
