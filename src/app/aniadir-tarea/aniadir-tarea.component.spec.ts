import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniadirTareaComponent } from './aniadir-tarea.component';

describe('AniadirTareaComponent', () => {
  let component: AniadirTareaComponent;
  let fixture: ComponentFixture<AniadirTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniadirTareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AniadirTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
