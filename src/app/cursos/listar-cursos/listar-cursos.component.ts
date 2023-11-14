import {Component, OnInit} from '@angular/core';
import {Curso} from "../model/curso";
import {CursoService} from "../service/curso.service";

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  public cursos: Array<Curso> = [];
  public nombreCurso!: string;
  public cursoSelected!: Curso;
  public selected: boolean = false;

  constructor(private cursoService: CursoService) {
      this.cursoService.getCursos().subscribe(
        (cursos: Array<Curso>) => {
          this.cursos = cursos;
        }
      );
  }


  ngOnInit(): void {
    // this.cursos[0] = {id: 1, curso: 'Angular', programa: 'Ingenieria de sistemas'};
    // this.cursos[1] = {id: 2, curso: 'Java', programa: 'Ingenieria de sistemas'};
    // this.cursos[2] = {id: 3, curso: 'Python', programa: 'Ingenieria de sistemas'};
    // this.cursos[3] = {id: 4, curso: 'C#', programa: 'Ingenieria de sistemas'};
    // this.cursos[4] = {id: 5, curso: 'C++', programa: 'Ingenieria de sistemas'};
  }

  onSelected(curso: Curso) {
     this.cursoSelected = curso;
     this.selected=true;
     // this.routerPath.navigate(['/cursos/detalle', curso.id]); //Estrategia redireccionando la ruta
  }
}
