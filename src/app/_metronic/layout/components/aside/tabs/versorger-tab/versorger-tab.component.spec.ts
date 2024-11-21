import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersorgerTabComponent } from './versorger-tab.component';

describe('VersorgerTabComponent', () => {
  let component: VersorgerTabComponent;
  let fixture: ComponentFixture<VersorgerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersorgerTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersorgerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
