import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/Model/Receita';
import { ReceitaService } from 'src/app/service/receita.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/Model/Categoria';

@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit {

  receita: Receita = new Receita;
  receitaNova: Receita = new Receita;
  categoria: Categoria = new Categoria;

  constructor(private receitaService: ReceitaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    window.scroll(0, 0);

    let id = this.route.snapshot.params['id'];

    this.findById(id);
  }


  findById(id: number) {
    this.receitaService.getByIdReceita(id).subscribe((resp: Receita) => {
      this.receita = resp;
    })
  }

  conferirNome() {
    if (this.receitaNova.nome == null) {
      this.receitaNova.nome = this.receita.nome;
    }
    return this.receitaNova.nome;
  }

  conferirIngredientes() {
    if (this.receitaNova.ingredientes == null) {
      this.receitaNova.ingredientes = this.receita.ingredientes;
    }
    return this.receitaNova.ingredientes
  }

  conferirModoPreparo() {
    if (this.receitaNova.modoPreparo == null) {
      this.receitaNova.modoPreparo = this.receita.modoPreparo;
    }
    return this.receitaNova.modoPreparo;
  }

  conferirImg1() {
    if (this.receitaNova.img1 == null) {
      this.receitaNova.img1 = this.receita.img1;
    }
    return this.receitaNova.img1;
  }

  conferirImg2() {
    if (this.receitaNova.img2 == null) {
      this.receitaNova.img2 = this.receita.img2;
    }
    return this.receitaNova.img2;
  }

  conferirImg3() {
    if (this.receitaNova.img3 == null) {
      this.receitaNova.img3 = this.receita.img3;
    }
    return this.receitaNova.img3;
  }


  atualizarReceita() {
    //passando o mesmo ID
    this.receitaNova.id = this.receita.id;

    //Passando quem enviou a receita
    this.receitaNova.idUsuario.id = 1;

    //Capturar a categoria pelo HTML (value)
    this.categoria.id = parseInt((<HTMLSelectElement>document.getElementById('categoria')).value);
    //Atribuindo a categoria para a Receita
    this.receitaNova.idCategoria = this.categoria;

    //Capturando o status se Ativo pelo html (value)
    let ativo = (<HTMLSelectElement>document.getElementById('ativo')).value;
    if (ativo == '1' || ativo == '2') {
      this.receitaNova.ativo = true;
    } else {
      this.receitaNova.ativo = false;
    }


    this.receitaService.putReceita(this.receitaNova).subscribe((resp: Receita) => {
      this.receitaNova = resp;
      //Navegar para a Rota
      this.router.navigate(['/receitas']);
    })
  }

  salvar() {
    this.conferirNome();
    this.conferirIngredientes();
    this.conferirModoPreparo();
    this.conferirImg1();
    this.conferirImg2();
    this.conferirImg3();
    this.atualizarReceita();

  }

}
