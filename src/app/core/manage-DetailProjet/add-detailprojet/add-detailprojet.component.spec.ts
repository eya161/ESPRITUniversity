import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailprojetComponent } from './add-detailprojet.component';

describe('AddDetailprojetComponent', () => {
  let component: AddDetailprojetComponent;
  let fixture: ComponentFixture<AddDetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
