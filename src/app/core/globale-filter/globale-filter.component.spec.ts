import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaleFilterComponent } from './globale-filter.component';

describe('GlobaleFilterComponent', () => {
  let component: GlobaleFilterComponent;
  let fixture: ComponentFixture<GlobaleFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobaleFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobaleFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
