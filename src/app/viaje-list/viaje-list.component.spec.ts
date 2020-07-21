import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeListComponent } from './viaje-list.component';

describe('ViajeListComponent', () => {
  let component: ViajeListComponent;
  let fixture: ComponentFixture<ViajeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
