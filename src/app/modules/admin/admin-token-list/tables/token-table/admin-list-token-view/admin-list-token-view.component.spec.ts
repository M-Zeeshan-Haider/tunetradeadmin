import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListTokenViewComponent } from './admin-list-token-view.component';

describe('AdminListTokenViewComponent', () => {
  let component: AdminListTokenViewComponent;
  let fixture: ComponentFixture<AdminListTokenViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListTokenViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListTokenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
