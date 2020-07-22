import { Component, OnInit, Input, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Viaje } from '../models/viaje';
import { IdValue } from '../models/id-value';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.scss']
})
export class ViajeListComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  // _viajes: Viaje;
  // @Input() set viajes(value: Viaje) {
  //   if (value) {
  //     this.viajes = value;
  //     console.log('entra por aquí');

  //   }
  //   this._viajes = value;
  //   console.log('entra por aquí');
  // }

  @Input() viajes: Viaje[] = [];
  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  @Output() viajeClicked = new EventEmitter<Viaje>(false);

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChange(): void {

  }

  modificarViaje(item: Viaje): void {
    this.viajeClicked.emit(item);
  }

}
