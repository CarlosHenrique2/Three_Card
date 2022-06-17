import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreecardComponent } from './threecard.component';

describe('ThreecardComponent', () => {
  let component: ThreecardComponent;
  let fixture: ComponentFixture<ThreecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
