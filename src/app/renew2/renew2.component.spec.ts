import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renew2Component } from './renew2.component';

describe('Renew2Component', () => {
  let component: Renew2Component;
  let fixture: ComponentFixture<Renew2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Renew2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Renew2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
