import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndkundenTabComponent } from './endkunden-tab.component';

describe('EndkundenTabComponent', () => {
  let component: EndkundenTabComponent;
  let fixture: ComponentFixture<EndkundenTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndkundenTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndkundenTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
