import { Component, OnInit, Input, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Viaje, TiposDeViajes } from '../models/viaje';
import { IdValue } from '../models/id-value';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
  _tiposDeViajes: IdValue[];
  _tiposDeViajesBck: IdValue[];
  @Input() set tiposDeViajes(value: IdValue[]) {
    if (value) {
      this._tiposDeViajesBck = value;
      this._tiposDeViajes = value;
    }
  }
  get tiposDeViajes(): IdValue[] {
    return this._tiposDeViajes;
  }

  @Output() viajeChanged = new EventEmitter<Viaje>(false);

  

  elFormulario: FormGroup;

  constructor(fb: FormBuilder) {

    this.buildFormulario(fb);

  }

  private buildFormulario(fb: FormBuilder): void {
    this.elFormulario = fb.group({
      id: [''],
      nombreDelViaje: ['', Validators.required],
      tipoDelViaje: [''],
      duracion: [0],
      destino: ['', Validators.compose([this.destinoNoValido, Validators.required])],
      plazas: [0],
      visible: [true],
      estado: ['']
    });
  }
  destinoNoValido(control: FormControl): { [s: string]: boolean } {
    if (control.value?.toLowerCase().indexOf('roma') >= 0) {
      return { destinoNoValido: true };
    }
  }

  ngOnInit(): void {

    this.elFormulario.controls.nombreDelViaje.valueChanges.subscribe(x => {
      this.validadorNombreDelViaje(x);
    })

    this.elFormulario.controls.destino.valueChanges.subscribe(x => {
      if (x?.toLowerCase().indexOf('madrid') >= 0){
        this._tiposDeViajes = this._tiposDeViajesBck.filter( v => v.id != TiposDeViajes.Crucero  );
      } else {
        this._tiposDeViajes = this._tiposDeViajesBck;
      }
    });

    // this.elFormulario.controls.nombreDelViaje.setValue(this.viaje.nombreDelViaje);

    // Si coges un dato externo al componente hay q ver q exista
    // Carga todo el elemento viaje
    // if(this.viaje) {
    //   this.elFormulario.patchValue(this.viaje);
    // }
  }

  private validadorNombreDelViaje(x: any) {
    if (x?.toLowerCase().indexOf('Madrid') >= 0) {
      this.elFormulario.controls.destino.patchValue('España');
      this.elFormulario.controls.tipoDelViaje.disable();
    }
  }

  ngOnChange(changes: SimpleChanges): void {
    if (changes.viaje?.currentValue) {
       this.elFormulario.patchValue(changes.viaje.currentValue);
    }
  }

  guardar(formValue: Viaje): void {
    this.viajeChanged.emit(formValue);
    this.elFormulario.reset();
  }

  nuevoViaje(): void {
    // this.viaje = new Viaje();
    this.elFormulario.reset();
    
  }

 
}

