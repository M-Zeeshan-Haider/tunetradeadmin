import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTokenTableComponent } from './create-token-table.component';

describe('CreateTokenTableComponent', () => {
  let component: CreateTokenTableComponent;
  let fixture: ComponentFixture<CreateTokenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTokenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTokenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
