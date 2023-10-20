export interface Alumno {
    id: string;
    nombre: string;
    edad: number;
    sexo: string;
    asignatura: asignatura[];
    matricula: string;
    pago: string;
}

export interface asignatura {
    nombre: string;
    horas: number;
}