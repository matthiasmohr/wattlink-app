import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfragenListeComponent } from './anfragen-liste.component';

describe('AnfragenListeComponent', () => {
  let component: AnfragenListeComponent;
  let fixture: ComponentFixture<AnfragenListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnfragenListeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnfragenListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
