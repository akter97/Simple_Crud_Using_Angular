import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcrudComponent } from './studentcrud.component';

describe('StudentcrudComponent', () => {
  let component: StudentcrudComponent;
  let fixture: ComponentFixture<StudentcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
