import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJecjComponent } from './why-jecj.component';

describe('WhyJecjComponent', () => {
  let component: WhyJecjComponent;
  let fixture: ComponentFixture<WhyJecjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyJecjComponent]
    });
    fixture = TestBed.createComponent(WhyJecjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
