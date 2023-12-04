import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDetailprojetComponent } from './delete-detailprojet.component';

describe('DeleteDetailprojetComponent', () => {
  let component: DeleteDetailprojetComponent;
  let fixture: ComponentFixture<DeleteDetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
