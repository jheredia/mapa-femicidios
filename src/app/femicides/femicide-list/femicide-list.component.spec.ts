import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemicideListComponent } from './femicide-list.component';

describe('FemicideListComponent', () => {
  let component: FemicideListComponent;
  let fixture: ComponentFixture<FemicideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemicideListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemicideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
