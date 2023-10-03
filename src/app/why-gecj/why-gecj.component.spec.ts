import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyGecjComponent } from './why-gecj.component';

describe('WhyGecjComponent', () => {
  let component: WhyGecjComponent;
  let fixture: ComponentFixture<WhyGecjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyGecjComponent]
    });
    fixture = TestBed.createComponent(WhyGecjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
