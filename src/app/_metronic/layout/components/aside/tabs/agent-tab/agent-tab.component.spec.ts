import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentTabComponent } from './agent-tab.component';

describe('NotificationsTabComponent', () => {
  let component: AgentTabComponent;
  let fixture: ComponentFixture<AgentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
