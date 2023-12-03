import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowVilleleComponent } from './show-villele.component';

describe('ShowVilleleComponent', () => {
  let component: ShowVilleleComponent;
  let fixture: ComponentFixture<ShowVilleleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowVilleleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowVilleleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
