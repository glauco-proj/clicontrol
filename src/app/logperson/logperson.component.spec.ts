import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpersonComponent } from './logperson.component';

describe('LogpersonComponent', () => {
  let component: LogpersonComponent;
  let fixture: ComponentFixture<LogpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
