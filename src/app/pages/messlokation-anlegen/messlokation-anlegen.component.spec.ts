import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesslokationAnlegenComponent } from './messlokation-anlegen.component';

describe('AnfragenListeComponent', () => {
  let component: MesslokationAnlegenComponent;
  let fixture: ComponentFixture<MesslokationAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesslokationAnlegenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesslokationAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
