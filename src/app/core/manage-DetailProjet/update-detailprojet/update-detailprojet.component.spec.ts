import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailprojetComponent } from './update-detailprojet.component';

describe('UpdateDetailprojetComponent', () => {
  let component: UpdateDetailprojetComponent;
  let fixture: ComponentFixture<UpdateDetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
