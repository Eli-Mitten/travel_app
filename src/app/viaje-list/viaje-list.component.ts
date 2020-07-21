import { Component, OnInit, Input } from '@angular/core';
import { Viaje } from '../models/viaje';
import { IdValue } from '../models/id-value';

@Component({
  selector: 'app-viaje-list',
  templateUrl: './viaje-list.component.html',
  styleUrls: ['./viaje-list.component.scss']
})
export class ViajeListComponent implements OnInit {

  @Input() viajes: Viaje[] = [];
  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  modificarViaje() {
    
  }

}
