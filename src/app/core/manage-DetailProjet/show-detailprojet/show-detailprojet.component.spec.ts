import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailprojetComponent } from './show-detailprojet.component';

describe('ShowDetailprojetComponent', () => {
  let component: ShowDetailprojetComponent;
  let fixture: ComponentFixture<ShowDetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
