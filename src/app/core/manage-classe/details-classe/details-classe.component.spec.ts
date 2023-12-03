import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClasseComponent } from './details-classe.component';

describe('DetailsClasseComponent', () => {
  let component: DetailsClasseComponent;
  let fixture: ComponentFixture<DetailsClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
