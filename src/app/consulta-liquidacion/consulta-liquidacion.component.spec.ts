import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLiquidacionComponent } from './consulta-liquidacion.component';

describe('ConsultaLiquidacionComponent', () => {
  let component: ConsultaLiquidacionComponent;
  let fixture: ComponentFixture<ConsultaLiquidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaLiquidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
