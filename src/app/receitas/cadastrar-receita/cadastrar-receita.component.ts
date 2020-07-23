import { Component, OnInit } from '@angular/core';
import { ReceitaService } from 'src/app/service/receita.service';
import { Receita } from 'src/app/Model/Receita';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/Model/Categoria';

@Component({
  selector: 'app-cadastrar-receita',
  templateUrl: './cadastrar-receita.component.html',
  styleUrls: ['./cadastrar-receita.component.css']
})
export class CadastrarReceitaComponent implements OnInit {

  constructor(private receitaService: ReceitaService, private router: Router) { }

  receita: Receita = new Receita;
  categoria: Categoria = new Categoria;

  ngOnInit(): void {

    window.scroll(0, 0);
  }

  semImagem() {
    // if (this.receita.img1 == null) {
    //   this.receita.img1 = "https://i.imgur.com/VkD7vEA.png";
    // }
    if (this.receita.img2 == null) {
      this.receita.img2 = "https://i.imgur.com/VkD7vEA.png";
    }
    if (this.receita.img3 == null) {
      this.receita.img3 = "https://i.imgur.com/VkD7vEA.png";
    }
    console.log(this.receita.img2)
    console.log(this.receita.img3)
  }


  //Cadastrar Receita
  cadastrarReceita() {
    this.semImagem();
    this.categoria.id = parseInt((<HTMLSelectElement>document.getElementById("categoria")).value);
    this.receita.idCategoria = this.categoria;
    this.receita.ativo = true;

    this.receitaService.postReceita(this.receita).subscribe((resp: Receita) => {
      this.receita = resp;
      // this.receita.idUsuario.id = 1;
      this.router.navigate(['/receitas']);
    })
  }

}
