import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTokenListComponent } from './admin-token-list.component';

describe('AdminTokenListComponent', () => {
  let component: AdminTokenListComponent;
  let fixture: ComponentFixture<AdminTokenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTokenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTokenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
