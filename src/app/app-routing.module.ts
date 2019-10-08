import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiquidacionComponent } from './liquidacion/liquidacion.component';
import { ConsultaLiquidacionComponent } from './consulta-liquidacion/consulta-liquidacion.component';

const routes: Routes = [
  {path: 'Liquidacion', component: LiquidacionComponent},
  {path: 'Consulta', component: ConsultaLiquidacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
