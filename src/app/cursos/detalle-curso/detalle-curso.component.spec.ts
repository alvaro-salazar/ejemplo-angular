import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCursoComponent } from './detalle-curso.component';

describe('DetalleCursoComponent', () => {
  let component: DetalleCursoComponent;
  let fixture: ComponentFixture<DetalleCursoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleCursoComponent]
    });
    fixture = TestBed.createComponent(DetalleCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
