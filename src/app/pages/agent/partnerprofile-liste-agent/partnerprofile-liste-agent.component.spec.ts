import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerprofileListeAgentComponent } from './partnerprofile-liste-agent.component';

describe('PartnerprofileListeComponent', () => {
  let component: PartnerprofileListeAgentComponent;
  let fixture: ComponentFixture<PartnerprofileListeAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartnerprofileListeAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnerprofileListeAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
