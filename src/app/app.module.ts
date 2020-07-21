import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReceitasComponent } from './receitas/receitas.component';
import { EditarReceitaComponent } from './receitas/editar-receita/editar-receita.component';
import { DetalharReceitaComponent } from './receitas/detalhar-receita/detalhar-receita.component';
import { CadastrarReceitaComponent } from './receitas/cadastrar-receita/cadastrar-receita.component';
import { DeletarReceitaComponent } from './receitas/deletar-receita/deletar-receita.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ReceitasComponent,
    EditarReceitaComponent,
    DetalharReceitaComponent,
    CadastrarReceitaComponent,
    DeletarReceitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
