import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../service/receita.service';
import { Receita } from '../Model/Receita';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {

  listaReceitas: Receita[];
  constructor(private receitaService: ReceitaService) { }



  ngOnInit(): void {
    this.findAllReceita();
    window.scroll(0, 0);
  }


  findAllReceita() {
    this.receitaService.getAllReceitas().subscribe((resp: Receita[]) => {
      this.listaReceitas = resp;
    })
  }

}
