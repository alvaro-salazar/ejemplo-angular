import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../model/curso";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseUrl: string = "https://gist.githubusercontent.com/alvaro-salazar/3ac747e5e4855da576b4e276fde8234d/raw/55ae4e68ad0d5e3c4047b38d6d83bfc0f251a593/gistfile1.txt"; //TODO: Agregar url del servicio

  constructor(private httpClient: HttpClient) {

  }

  /**
   * Metodo que obtiene los cursos
   * @returns Observable<Curso[]> Lista de cursos
   */
  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(this.baseUrl);
  }

  /**
   * Metodo que crea un curso
   * @param curso Curso a crear
   */
  crearCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.post<Curso>(this.baseUrl, curso);
  }

  /**
   * Metodo que edita un curso
   * @param curso Curso a editar
   */
  editarCurso(curso: Curso): Observable<Curso> {
    return this.httpClient.put<Curso>(this.baseUrl, curso);
  }
}
