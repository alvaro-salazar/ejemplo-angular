import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from "@angular/router";
import {ListarCursosComponent} from "./cursos/listar-cursos/listar-cursos.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const rutas: Routes =[
  //{path: '', redirectTo: 'listar-cursos', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: '', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
