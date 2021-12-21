import { TestBed } from '@angular/core/testing';

import { BusquedaCartaService } from './carta/busqueda-carta.service';

describe('BusquedaCartaService', () => {
  let service: BusquedaCartaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaCartaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
