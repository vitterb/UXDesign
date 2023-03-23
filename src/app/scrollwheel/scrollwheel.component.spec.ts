import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollwheelComponent } from './scrollwheel.component';

describe('ScrollwheelComponent', () => {
  let component: ScrollwheelComponent;
  let fixture: ComponentFixture<ScrollwheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollwheelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
