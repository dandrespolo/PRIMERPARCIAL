import { TestBed } from '@angular/core/testing';

import { DataLiquidacionService } from './data-liquidacion.service';

describe('DataLiquidacionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataLiquidacionService = TestBed.get(DataLiquidacionService);
    expect(service).toBeTruthy();
  });
});
