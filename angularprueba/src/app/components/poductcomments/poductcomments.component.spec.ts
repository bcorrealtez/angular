import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductcommentsComponent } from './poductcomments.component';

describe('PoductcommentsComponent', () => {
  let component: PoductcommentsComponent;
  let fixture: ComponentFixture<PoductcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductcommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
