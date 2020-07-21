import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeReactiveFormComponent } from './viaje-reactive-form.component';

describe('ViajeReactiveFormComponent', () => {
  let component: ViajeReactiveFormComponent;
  let fixture: ComponentFixture<ViajeReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
