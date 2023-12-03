import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDepartmentComponent } from './stat-department.component';

describe('StatDepartmentComponent', () => {
  let component: StatDepartmentComponent;
  let fixture: ComponentFixture<StatDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
