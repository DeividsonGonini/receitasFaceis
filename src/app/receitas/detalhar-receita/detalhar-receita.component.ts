import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { Receita } from 'src/app/Model/Receita';
import { ReceitaService } from 'src/app/service/receita.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Button } from 'protractor';

@Component({
  selector: 'app-detalhar-receita',
  templateUrl: './detalhar-receita.component.html',
  styleUrls: ['./detalhar-receita.component.css']
})

export class DetalharReceitaComponent implements OnInit {

  receita: Receita = new Receita;

  constructor(private receitaService: ReceitaService, private route: ActivatedRoute, private location: Location) { }


  // Botão Voltar
  voltar() {
    this.location.back();
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];

    this.findById(id);
  }

  findById(id: number) {
    this.receitaService.getByIdReceita(id).subscribe((resp: Receita) => {
      this.receita = resp;
    })
  }



}
