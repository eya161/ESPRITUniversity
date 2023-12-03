import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUniversiteComponent } from './delete-universite.component';

describe('DeleteUniversiteComponent', () => {
  let component: DeleteUniversiteComponent;
  let fixture: ComponentFixture<DeleteUniversiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUniversiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUniversiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
