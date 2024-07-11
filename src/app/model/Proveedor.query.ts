export interface Proveedor {
    id:         number;
    nombre:     string;
    apellido:   string;
    direccion:  string;
    celular:    string;
    email:      string;
    documento:  Documento;
    documentoN: string;
    estado:     Estado | null;
}

export enum Documento {
    Ce = "CE",
    Dni = "DNI",
}

export enum Estado {
    A = "A",
}
