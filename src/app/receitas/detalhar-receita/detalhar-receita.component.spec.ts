import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharReceitaComponent } from './detalhar-receita.component';

describe('DetalharReceitaComponent', () => {
  let component: DetalharReceitaComponent;
  let fixture: ComponentFixture<DetalharReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
