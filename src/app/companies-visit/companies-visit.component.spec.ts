import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesVisitComponent } from './companies-visit.component';

describe('CompaniesVisitComponent', () => {
  let component: CompaniesVisitComponent;
  let fixture: ComponentFixture<CompaniesVisitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompaniesVisitComponent]
    });
    fixture = TestBed.createComponent(CompaniesVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
