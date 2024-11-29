import { TestBed } from '@angular/core/testing';

import { TareaServiciosService } from './tarea-servicios.service';

describe('TareaServiciosService', () => {
  let service: TareaServiciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareaServiciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
