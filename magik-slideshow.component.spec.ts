import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagikSlideshowComponent } from './magik-slideshow.component';

describe('MagikSlideshowComponent', () => {
  let component: MagikSlideshowComponent;
  let fixture: ComponentFixture<MagikSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagikSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagikSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
