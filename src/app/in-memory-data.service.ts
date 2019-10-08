import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Liquidacion } from './liquidacion';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const liquidaciones = [
      { idMatricula: 1, Nombre:'Pepito Perez', Salario:828116, TipoActividad: 'Clases de futbol', DiasAsistencia: 40, ValorMatricula: 92012},
      { idMatricula: 2, Nombre:'Juanchito Lopez', Salario:1228116, TipoActividad: 'Clases de natacion', DiasAsistencia: 30, ValorMatricula: 108176},

    ];
    return {liquidaciones};
  }
  genId(lista: Liquidacion[]): number {
    return lista.length > 0 ? Math.max(...lista.map(liquidacion => liquidacion.idMatricula)) + 1 : 11;
  }
}
