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

  // Creamos e inicializamos el formulario editarCursoForm usando el constructor de FormGroup
  public editarCursoForm: FormGroup= new FormGroup({
    id: new FormControl('',[Validators.required,Validators.minLength(4)]),
    curso: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  // Creamos un atributo (relacion) curso que es el que vamos a editar
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
   * Metodo que cancela la edicion de un curso
   */
  cancelarEditarCurso() {
    this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
  }

  /**
   * Metodo que edita un curso en el servicio
   * @param curso Curso a crear
   */
  editarCurso(curso: Curso) {
    this.cursoService.editarCurso(curso).subscribe( // Le decimos al servicio que edite el curso
      (curso: Curso) => {
        // console.log(curso);
        Swal.fire( // Le decimos al usuario que el curso ha sido editado
          'Curso editado',
          `El curso ${curso.curso} ha sido actualizado con exito`,
          'success'
        );
        this.router.navigate(['/listar']); //Redirecciona a la ruta /listar
      });
  }

  /**
   * Metodo que se ejecuta al iniciar el componente
   */
  ngOnInit(): void {
    const idCurso = parseInt(this.route.snapshot.params['id']); // Obtenemos el id del curso a editar

    this.cursoService.getCurso(idCurso).subscribe((curso) => { // Le decimos al servicio que nos traiga el curso a editar
      this.curso = curso; // Obtenemos el curso a editar
      // console.log(this.curso);
      this.editarCursoForm = this.formBuilder.group({ // Creamos el formulario editarCursoForm
        id: [this.curso.id, []], // mostramos el Id del curso. El id no se puede editar
        curso: [this.curso.curso, [Validators.required, Validators.minLength(4)]], // Mostramos el nombre del curso
        programa: [this.curso.programa, [Validators.required, Validators.minLength(4)]] // Mostramos el programa del curso
      });
    });
  }

}
