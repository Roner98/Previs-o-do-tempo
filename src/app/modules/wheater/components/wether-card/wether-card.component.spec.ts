import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WetherCardComponent } from './wether-card.component';

describe('WetherCardComponent', () => {
  let component: WetherCardComponent;
  let fixture: ComponentFixture<WetherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WetherCardComponent]
    });
    fixture = TestBed.createComponent(WetherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
