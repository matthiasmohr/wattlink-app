import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesslokationLastkurveComponent } from './messlokation-lastkurve.component';

describe('AnfragenListeComponent', () => {
  let component: MesslokationLastkurveComponent;
  let fixture: ComponentFixture<MesslokationLastkurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesslokationLastkurveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesslokationLastkurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
