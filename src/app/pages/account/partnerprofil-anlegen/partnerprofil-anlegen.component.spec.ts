import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerprofilAnlegenComponent } from './partnerprofil-anlegen.component';

describe('AnfragenListeComponent', () => {
  let component: PartnerprofilAnlegenComponent;
  let fixture: ComponentFixture<PartnerprofilAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerprofilAnlegenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerprofilAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
