import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCursosComponent } from './listar-cursos/listar-cursos.component';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import {CursosRoutingModule} from "./cursos-routing.module";
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    ListarCursosComponent,
    CrearCursoComponent,
    DetalleCursoComponent,
  ],
  exports: [
    ListarCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
