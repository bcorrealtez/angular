import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelprodComponent } from './relprod.component';

describe('RelprodComponent', () => {
  let component: RelprodComponent;
  let fixture: ComponentFixture<RelprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
