import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemicideDetailsComponent } from './femicide-details.component';

describe('FemicideDetailsComponent', () => {
  let component: FemicideDetailsComponent;
  let fixture: ComponentFixture<FemicideDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemicideDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemicideDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
