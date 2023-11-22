import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Curso} from "../model/curso";
import {CursoService} from "../service/curso.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {
  public crearCursoForm: FormGroup= new FormGroup({
    curso: new FormControl('',[Validators.required,Validators.minLength(4)]),
    programa: new FormControl('',[Validators.required,Validators.minLength(4)])
  });

  /**
   * Constructor del componente
   * @param router Router de la aplicacion
   * @param formBuilder Formulario de creacion de curso
   * @param cursoService Servicio de curso para crear un curso
   */
  constructor(public router: Router, public formBuilder: FormBuilder, private cursoService: CursoService) {

  }

  /**
   * Metodo que crea un curso
   */
  cancelarCrearCurso() {
    this.router.navigate(['/listar']);
  }

  /**
   * Metodo que crea un curso en el servicio
   * @param curso Curso a crear
   */
  crearCurso(curso: Curso) {
    this.cursoService.crearCurso(curso).subscribe(
      (curso: Curso) => {
        // console.log(curso);
        Swal.fire(
          'Curso creado',
          `El curso ${curso.curso} ha sido creado con exito`,
          'success'
        );
        this.crearCursoForm.reset();  //Resetea el formulario
        this.router.navigate(['/listar']);
      });
  }
//regexp: regular expression
  ngOnInit(): void {
    this.crearCursoForm = this.formBuilder.group({
      curso: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      programa: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
}
