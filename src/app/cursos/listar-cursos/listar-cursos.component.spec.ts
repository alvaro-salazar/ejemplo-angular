import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCursosComponent } from './listar-cursos.component';

describe('ListarCursosComponent', () => {
  let component: ListarCursosComponent;
  let fixture: ComponentFixture<ListarCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCursosComponent]
    });
    fixture = TestBed.createComponent(ListarCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
