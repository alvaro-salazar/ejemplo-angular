import {Component, OnInit} from '@angular/core';
import {Curso} from "../model/curso";
import {CursoService} from "../service/curso.service";
import Swal from "sweetalert2";


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

     Swal.fire('Detalle del curso','<table class="table">\n' +
       '  <thead>\n' +
       '  <tr>\n' +
       '    <th scope="col">Codigo</th>\n' +
       '    <th scope="col">Programa</th>\n' +
       '    <th scope="col">Curso</th>\n' +
       '  </tr>\n' +
       '  </thead>\n' +
       '  <tbody>\n' +
       '    <tr>\n' +
       '      <td>'+this.cursoSelected.id+'</td>\n' +
       '      <td>'+this.cursoSelected.programa+'</td>\n' +
       '      <td>'+this.cursoSelected.curso+'</td>\n' +
       '    </tr>\n' +
       '  </tbody>\n' +
       '</table>','success');

     // this.routerPath.navigate(['/cursos/detalle', curso.id]); //Estrategia redireccionando la ruta
  }

  borrarCurso(curso: Curso) {
    Swal.fire({
      title: "Esta seguro?",
      text: "Usted no puede revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borra el curso!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "El curso ha sido eliminado.",
          icon: "success"
        });
      }
    });
  }
}
