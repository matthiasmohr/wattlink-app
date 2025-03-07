import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateiHochladenComponent } from './datei-hochladen.component';

describe('DateienListeComponent', () => {
  let component: DateiHochladenComponent;
  let fixture: ComponentFixture<DateiHochladenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateiHochladenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateiHochladenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
