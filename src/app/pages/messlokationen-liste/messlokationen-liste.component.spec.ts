import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesslokationenListeComponent } from './messlokationen-liste.component';

describe('AnfragenListeComponent', () => {
  let component: MesslokationenListeComponent;
  let fixture: ComponentFixture<MesslokationenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesslokationenListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesslokationenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
