import { Component, OnInit } from '@angular/core';
import { IdValue } from './models/id-value';
import { ViajeEstado, Viaje, TiposDeViajes } from './models/viaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  estados: IdValue[] = [];
  tiposDeViajes: IdValue[] = [];
  viaje: Viaje;
  viajes: Viaje[] = [];

  constructor() {
    this.estados = this.cargarEstados();
    this.tiposDeViajes = this.cargarTiposDeViajes();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.viaje = this.cargarViaje(7);
    }, 1000);
  }

  guardar(v: Viaje): void {
    this.viajes.push(v);
    console.table(v);
    console.log(this.viajes);
  }

  private cargarEstados(): IdValue[] {

    const result: IdValue[] = [];

    result.push({ id: ViajeEstado.AbiertoHastaElAmanecer, value: 'Abierto hasta el amanacer' });
    result.push({ id: ViajeEstado.Cancelado, value: 'Cancelado por inclemencias' });
    result.push({ id: ViajeEstado.Cerrado, value: 'Completado el aforo' });
    result.push({ id: ViajeEstado.Postpuesto, value: 'Postpuesto hasta nuevo aviso' });

    return result;
  }

  private cargarTiposDeViajes(): IdValue[] {
    const result: IdValue[] = [];

    result.push({ id: TiposDeViajes.Aventura, value: 'Aventura' });
    result.push({ id: TiposDeViajes.Crucero, value: 'Crucero'});
    result.push({ id: ViajeEstado.Cerrado, value: 'Safari'});
    result.push({ id: ViajeEstado.Postpuesto, value: 'Todo Incluido'});

    return result;
  }

  private cargarViaje(id?: number): Viaje {

    // imaginad que llamamos a la bbdd y pedido el viaje con id = 7
    const viaje = new Viaje({
      id: 7,
      nombreDelViaje: 'Crucero por las Islas Griegas',
      destino: ' Grecia',
      duracion: 7,
      plazas: 30,
      estado: ViajeEstado.AbiertoHastaElAmanecer,
      tipoDelViaje: TiposDeViajes.Crucero,
      visible: true
    });

    return viaje;
  }
}
