import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Admin1ManageComponent } from './admin1-manage.component';

describe('Admin1ManageComponent', () => {
  let component: Admin1ManageComponent;
  let fixture: ComponentFixture<Admin1ManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Admin1ManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Admin1ManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
