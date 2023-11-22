import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CursoService} from "../service/curso.service";
import {Curso} from "../model/curso";
import Swal from "sweetalert2";

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  public editarCursoForm: FormGroup= new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    curso: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  });
  public curso!: Curso;


  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param cursoService Servicio de curso para crear un curso
   * @param route Ruta del componente
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private cursoService: CursoService, private route: ActivatedRoute) {

  }

  /**
   * Metodo que crea un curso
   */
  cancelarEditarCurso() {
    this.router.navigate(['/listar']);
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param curso Curso a crear
   */
  editarCurso(curso: Curso) {
    this.cursoService.editarCurso(curso).subscribe(
      (curso: Curso) => {
        console.log(curso);
        Swal.fire(
          'Curso editado',
          `El curso ${curso.curso} ha sido actualizado con exito`,
          'success'
        );
      });
  }

  ngOnInit(): void {
    const idCurso = parseInt(this.route.snapshot.params['id']);

    this.cursoService.getCurso(idCurso).subscribe((curso) => {
      this.curso = curso;
      console.log(this.curso);
      this.editarCursoForm = this.formBuilder.group({
        id: [this.curso.id, []],
        curso: [this.curso.curso, [Validators.required, Validators.minLength(4)]],
        programa: [this.curso.programa, [Validators.required, Validators.minLength(4)]]
      });
    });
  }

}
