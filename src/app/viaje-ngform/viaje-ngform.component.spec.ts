import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeNgformComponent } from './viaje-ngform.component';

describe('ViajeNgformComponent', () => {
  let component: ViajeNgformComponent;
  let fixture: ComponentFixture<ViajeNgformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeNgformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeNgformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
