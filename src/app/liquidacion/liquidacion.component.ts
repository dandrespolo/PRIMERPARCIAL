import { Component, OnInit } from '@angular/core';

import { DataLiquidacionService } from '../data-liquidacion.service';
import { Liquidacion } from '../liquidacion';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit {

  liquidacion: Liquidacion;
  constructor(private DataLiquidacionService: DataLiquidacionService) { }

  ngOnInit() {
    this.liquidacion = new Liquidacion();
    console.log('Se inicializo el objeto Matricula');
  }

  add(): void {
    if (this.liquidacion.Salario < 828116) {
      alert('El valor del salario debe ser mayor');
    } else
      if (this.liquidacion.DiasAsistencia > 60) {
        alert('Los dias de asistencia no deben ser mayores');
      } else {
        if (this.liquidacion.TipoActividad == 'Clases de futbol') {
          this.liquidacion.ValorMatricula = ((this.liquidacion.Salario) * this.liquidacion.DiasAsistencia) / 360;
          this.DataLiquidacionService.addLiquidacion(this.liquidacion).subscribe();
          alert('Se agrego una nueva matricula');
        } else if (this.liquidacion.TipoActividad == 'Clases de natacion') {
          this.liquidacion.ValorMatricula = ((this.liquidacion.Salario + 70000) * this.liquidacion.DiasAsistencia) / 360;
          this.DataLiquidacionService.addLiquidacion(this.liquidacion).subscribe();
          alert('Se agrego una nueva matricula');
        }

      }
  }
}



