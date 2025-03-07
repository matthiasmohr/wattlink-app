import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateienListeComponent } from './dateien-liste.component';

describe('DateienListeComponent', () => {
  let component: DateienListeComponent;
  let fixture: ComponentFixture<DateienListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateienListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateienListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
