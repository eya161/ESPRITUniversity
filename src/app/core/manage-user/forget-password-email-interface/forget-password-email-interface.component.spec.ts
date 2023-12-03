import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPasswordEmailInterfaceComponent } from './forget-password-email-interface.component';

describe('ForgetPasswordEmailInterfaceComponent', () => {
  let component: ForgetPasswordEmailInterfaceComponent;
  let fixture: ComponentFixture<ForgetPasswordEmailInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetPasswordEmailInterfaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetPasswordEmailInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
