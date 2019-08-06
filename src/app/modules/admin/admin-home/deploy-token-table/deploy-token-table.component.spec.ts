import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployTokenTableComponent } from './deploy-token-table.component';

describe('DeployTokenTableComponent', () => {
  let component: DeployTokenTableComponent;
  let fixture: ComponentFixture<DeployTokenTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployTokenTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployTokenTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
