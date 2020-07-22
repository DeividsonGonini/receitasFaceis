import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ContactComponent } from './contact/contact.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { DetalharReceitaComponent } from './receitas/detalhar-receita/detalhar-receita.component';
import { EditarReceitaComponent } from './receitas/editar-receita/editar-receita.component';
import { DeletarReceitaComponent } from './receitas/deletar-receita/deletar-receita.component';
import { CadastrarReceitaComponent } from './receitas/cadastrar-receita/cadastrar-receita.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'receitas/detalhar/:id', component: DetalharReceitaComponent },
  { path: 'receitas/editar/:id', component: EditarReceitaComponent },
  { path: 'receitas/deletar/:id', component: DeletarReceitaComponent },
  { path: 'receitas/cadastrar', component: CadastrarReceitaComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
