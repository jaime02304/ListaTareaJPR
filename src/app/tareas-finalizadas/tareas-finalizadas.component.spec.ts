import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasFinalizadasComponent } from './tareas-finalizadas.component';

describe('TareasFinalizadasComponent', () => {
  let component: TareasFinalizadasComponent;
  let fixture: ComponentFixture<TareasFinalizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasFinalizadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasFinalizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
