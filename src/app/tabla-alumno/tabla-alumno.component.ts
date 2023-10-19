import { Component } from '@angular/core';
import { alumno } from '../models/alumno.interface';


const Alumnos: alumno[] = [
  { id: '1', nombre: 'Pedro', edad: 32, sexo: 'h', asignatura: [
    {
      nombre: 'Math',
      horas: 5
    },
    {
      nombre: 'Spanish',
      horas: 4
    }
  ], matricula: 'total', pago: 'otrodia'}, 
  { id: '2', nombre: 'Pedro', edad: 32, sexo: 'h', asignatura: [
    {
    nombre: 'Lengua',
    horas: 5
    
  }
], matricula: 'total', pago: 'otrodia'}, 

];


@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent {
  displayedColumns: string[] = ['nombre', 'edad', 'sexo', 'asignatura', 'matricula', 'pago'];
  dataSource = Alumnos;
}



