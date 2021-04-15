import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1DeleteComponent } from './admin1-delete.component';

describe('Admin1DeleteComponent', () => {
  let component: Admin1DeleteComponent;
  let fixture: ComponentFixture<Admin1DeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin1DeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin1DeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
