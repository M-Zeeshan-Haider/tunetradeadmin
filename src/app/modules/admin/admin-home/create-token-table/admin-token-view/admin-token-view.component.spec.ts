import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTokenViewComponent } from './admin-token-view.component';

describe('AdminTokenViewComponent', () => {
  let component: AdminTokenViewComponent;
  let fixture: ComponentFixture<AdminTokenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTokenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
