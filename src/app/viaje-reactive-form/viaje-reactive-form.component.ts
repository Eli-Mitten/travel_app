import { Component, OnInit, Input, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Viaje } from '../models/viaje';
import { IdValue } from '../models/id-value';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viaje-reactive-form',
  templateUrl: './viaje-reactive-form.component.html',
  styleUrls: ['./viaje-reactive-form.component.scss']
})
export class ViajeReactiveFormComponent implements OnInit {

  // @Input() viaje: Viaje = new Viaje();

  // tslint:disable-next-line: variable-name
  _viaje: Viaje;
  @Input() set viaje(value: Viaje) {
    if (value) {
      this.elFormulario.patchValue(value);
      console.log('@Input() set viaje');
    }
    this._viaje = value;
  }
  // get viaje(): Viaje {
  //   return this._viaje;
  // }

  @Input() estados: IdValue[] = [];
  @Input() tiposDeViajes: IdValue[] = [];

  @Output() viajeChanged = new EventEmitter<Viaje>(false);


  elFormulario: FormGroup;

  constructor(fb: FormBuilder) {

    this.elFormulario = this.buildFormulario(fb);

  }

  private buildFormulario(fb: FormBuilder): FormGroup {
    return fb.group({
      id: [0, Validators.required],
      nombreDelViaje: ['', Validators.required],
      tipoDelViaje: [''],
      duracion: [0],
      destino: [''],
      plazas: [0],
      visible: [true],
      estado: ['']
    });
  }

  ngOnInit(): void {
    // this.elFormulario.controls.nombreDelViaje.setValue(this.viaje.nombreDelViaje);

    // Si coges un dato externo al componente hay q ver q exista
    // Carga todo el elemento viaje
    // if(this.viaje) {
    //   this.elFormulario.patchValue(this.viaje);
    // }
  }

  ngOnChange(changes: SimpleChanges): void {
    if (changes.viaje?.currentValue) {
      this.elFormulario.patchValue(changes.viaje.currentValue);
    }
  }

  guardar(formValue: any): void {
    this.viajeChanged.emit(formValue);
  }

}
