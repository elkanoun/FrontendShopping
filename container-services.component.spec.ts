import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerServicesComponent } from './container-services.component';

describe('ContainerServicesComponent', () => {
  let component: ContainerServicesComponent;
  let fixture: ComponentFixture<ContainerServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
