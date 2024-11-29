import { Component, inject } from '@angular/core';
import { TareaServiciosService } from '../servicios/tarea-servicios.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aniadir-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './aniadir-tarea.component.html',
  styleUrl: './aniadir-tarea.component.css',
})
export class AniadirTareaComponent {
  tareaServiciosService = inject(TareaServiciosService);
  };

