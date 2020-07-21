import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Viaje, ViajeEstado } from '../models/viaje';
import { IdValue } from '../models/id-value';
@Component({
  selector: 'app-viaje-ngform',
  templateUrl: './viaje-ngform.component.html',
  styleUrls: ['./viaje-ngform.component.scss']
})
export class ViajeNgformComponent implements OnInit {

  _viaje: Viaje = new Viaje();

  @Input() set viaje(value: Viaje) {
    if (value){
      this._viaje = value;
    }
  }

  get viaje(): Viaje {
    return this._viaje;
  }
  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  constructor() {
  }

  ngOnInit(): void {
  }

  guardar(value: Viaje): void {
    this.viajeChanged.emit(value);
    this.viaje = new Viaje()
  }

}
