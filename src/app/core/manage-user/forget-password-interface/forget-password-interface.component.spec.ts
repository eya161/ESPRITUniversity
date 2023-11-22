import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordInterfaceComponent } from './forget-password-interface.component';

describe('ForgetPasswordInterfaceComponent', () => {
  let component: ForgetPasswordInterfaceComponent;
  let fixture: ComponentFixture<ForgetPasswordInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
