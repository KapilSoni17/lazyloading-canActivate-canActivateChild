import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1EditComponent } from './admin1-edit.component';

describe('Admin1EditComponent', () => {
  let component: Admin1EditComponent;
  let fixture: ComponentFixture<Admin1EditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin1EditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin1EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
