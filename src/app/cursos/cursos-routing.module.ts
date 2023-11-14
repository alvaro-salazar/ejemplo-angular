import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarCursosComponent} from "./listar-cursos/listar-cursos.component";
import {CrearCursoComponent} from "./crear-curso/crear-curso.component";
import {DetalleCursoComponent} from "./detalle-curso/detalle-curso.component";

const routes: Routes = [
  {
    path: '',
    component: ListarCursosComponent
  },
  {
    path: 'listar',
    component: ListarCursosComponent
  },
  {
    path: 'crear',
    component: CrearCursoComponent
  },
  {
    path: 'detalle/:id',
    component: DetalleCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
