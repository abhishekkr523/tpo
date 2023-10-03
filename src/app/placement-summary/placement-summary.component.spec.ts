import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementSummaryComponent } from './placement-summary.component';

describe('PlacementSummaryComponent', () => {
  let component: PlacementSummaryComponent;
  let fixture: ComponentFixture<PlacementSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlacementSummaryComponent]
    });
    fixture = TestBed.createComponent(PlacementSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
