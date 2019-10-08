import { Component, OnInit } from '@angular/core';

import { DataLiquidacionService } from '../data-liquidacion.service';
import { Liquidacion } from '../liquidacion';
@Component({
  selector: 'app-consulta-liquidacion',
  templateUrl: './consulta-liquidacion.component.html',
  styleUrls: ['./consulta-liquidacion.component.css']
})
export class ConsultaLiquidacionComponent implements OnInit {

  liquidaciones: Liquidacion[];

  constructor(private DataLiquidacionService: DataLiquidacionService ) { }

  ngOnInit() {
    this.DataLiquidacionService.getLiquidaciones().subscribe(liquidaciones=>this.liquidaciones=liquidaciones);
  }

}
