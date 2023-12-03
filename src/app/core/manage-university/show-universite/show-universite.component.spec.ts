import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUniversiteComponent } from './show-universite.component';

describe('ShowUniversiteComponent', () => {
  let component: ShowUniversiteComponent;
  let fixture: ComponentFixture<ShowUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
