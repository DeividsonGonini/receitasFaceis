import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receita } from '../Model/Receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http: HttpClient) { }

  urlApi: string = 'http://localhost:8080';

  //Listar todas as Receitas
  getAllReceitas() {
    return this.http.get(this.urlApi + '/receitas');
  }

  //Cadastrar Receita
  postReceita(receita: Receita) {
    return this.http.post(this.urlApi + '/cadastrar-receita', receita);
  }

  //Editar Receita
  putReceita(receita: Receita) {
    return this.http.put(this.urlApi + 'receitas', receita);
  }

  //Receita Detalhada
  getByIdReceita(id: number) {
    return this.http.get(this.urlApi + `/receitas/${id}`);
  }

  //Deletar Receita
  deleteReceita(id: number) {
    return this.http.delete(this.urlApi + `/receitas/${id}`);
  }


}