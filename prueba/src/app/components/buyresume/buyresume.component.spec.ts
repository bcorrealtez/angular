import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyresumeComponent } from './buyresume.component';

describe('BuyresumeComponent', () => {
  let component: BuyresumeComponent;
  let fixture: ComponentFixture<BuyresumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyresumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
