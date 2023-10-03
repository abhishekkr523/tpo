import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqdialogComponent } from './faqdialog.component';

describe('FaqdialogComponent', () => {
  let component: FaqdialogComponent;
  let fixture: ComponentFixture<FaqdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaqdialogComponent]
    });
    fixture = TestBed.createComponent(FaqdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
