import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTokenTableComponent } from './live-token-table.component';

describe('LiveTokenTableComponent', () => {
  let component: LiveTokenTableComponent;
  let fixture: ComponentFixture<LiveTokenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveTokenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveTokenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
