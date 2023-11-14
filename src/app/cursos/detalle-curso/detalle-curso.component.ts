import {Component, Input} from '@angular/core';
import {Curso} from "../model/curso";

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent {
  @Input() curso!: Curso;
}
