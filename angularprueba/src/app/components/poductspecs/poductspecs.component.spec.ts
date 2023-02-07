import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductspecsComponent } from './poductspecs.component';

describe('PoductspecsComponent', () => {
  let component: PoductspecsComponent;
  let fixture: ComponentFixture<PoductspecsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductspecsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductspecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
