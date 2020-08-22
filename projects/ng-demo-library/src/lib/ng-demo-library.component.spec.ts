import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDemoLibraryComponent } from './ng-demo-library.component';

describe('NgDemoLibraryComponent', () => {
  let component: NgDemoLibraryComponent;
  let fixture: ComponentFixture<NgDemoLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDemoLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDemoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
