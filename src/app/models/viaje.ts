export enum ViajeEstado {
    AbiertoHastaElAmanecer = 1,
    Cerrado = 2,
    Cancelado = 3,
    Postpuesto = 4
}

export enum TiposDeViajes {
    Aventura = 1,
    Crucero = 2,
    Safari = 3,
    TodoIncluido = 4
}

export class Viaje {
    id: number;
    nombreDelViaje: string; // Input
    tipoDelViaje: string; // select
    duracion: number; // input
    destino: string; // input
    plazas?: number; // input
    visible: boolean; // select || check || radio button
    estado: ViajeEstado; // select

    constructor(item?: any) {
        this.id = new Date().getMilliseconds();
        this.nombreDelViaje = item?.nombreDelViaje || '';
        this.tipoDelViaje = item?.tipoDelViaje || '';
        this.duracion = item?.duracion || 0;
        this.destino = item?.destino || '';
        this.plazas = item?.plazas || 0;
        this.visible = item && item.visible != null ? item.visible : false;
        this.estado = item?.estado || ViajeEstado.AbiertoHastaElAmanecer;
    }
}
