import {Component, OnInit} from '@angular/core';
import {Curso} from "../model/curso";
import {CursoService} from "../service/curso.service";
import Swal from "sweetalert2";
import {ActivatedRoute, Router} from "@angular/router";


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

  constructor(private cursoService: CursoService, private routerPath: Router, private router: ActivatedRoute) {
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

     this.routerPath.navigate(['/editar/'+curso.id]);
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
