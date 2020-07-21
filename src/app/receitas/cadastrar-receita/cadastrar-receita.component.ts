import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/service/receita.service';
import { Receita } from 'src/app/Model/Receita';

@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.css']
})
export class CadastrarReceitaComponent implements OnInit {

  constructor(private receitaService: ReceitaService) { }

  receita: Receita = new Receita;

  ngOnInit(): void {

    window.scroll(0, 0);
  }

  //Cadastrar Receita
  cadastrarReceita() {
    this.receitaService.postReceita(this.receita).subscribe((resp: Receita) => {
      this.receita = resp;
      this.receita.ativo = true;
      this.receita.idUsuario.id = 1;
    })
  }

}
