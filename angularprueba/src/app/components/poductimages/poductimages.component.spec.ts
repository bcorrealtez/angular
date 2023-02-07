import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductimagesComponent } from './poductimages.component';

describe('PoductimagesComponent', () => {
  let component: PoductimagesComponent;
  let fixture: ComponentFixture<PoductimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductimagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
