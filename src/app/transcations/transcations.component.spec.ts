import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationsComponent } from './transcations.component';

describe('TranscationsComponent', () => {
  let component: TranscationsComponent;
  let fixture: ComponentFixture<TranscationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
