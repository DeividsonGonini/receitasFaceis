import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarReceitaComponent } from './deletar-receita.component';

describe('DeletarReceitaComponent', () => {
  let component: DeletarReceitaComponent;
  let fixture: ComponentFixture<DeletarReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
