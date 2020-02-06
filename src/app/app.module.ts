import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importações dos conteúdos do site 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './fixo/nav-bar/nav-bar.component';
import { FooterComponent } from './fixo/footer/footer.component';
import { SobreNosComponent } from './Variavel/sobre-nos/sobre-nos.component';
import { FormularioComponent } from './Variavel/formulario/formulario.component';
import { HomeComponent } from './Variavel/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { PostagemIdComponent } from './Variavel/postagem-id/postagem-id.component';
import { ConfiguracoesComponent } from './variavel/configuracoes/configuracoes.component';
import { DetalheComponent } from './variavel/detalhe/detalhe.component';
import { OpenComponent } from './variavel/open/open.component';
import { CentralAjudaComponent } from './variavel/central-ajuda/central-ajuda.component';
import { AtualizaPostComponent } from './variavel/atualiza-post/atualiza-post.component';
import { QueroAjudarComponent } from './Variavel/quero-ajudar/quero-ajudar.component';
import { ListagemAdocaoComponent } from './Variavel/listagem-adocao/listagem-adocao.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SobreNosComponent,
    FormularioComponent,
    HomeComponent,
    PostagemIdComponent,
    ConfiguracoesComponent,
    DetalheComponent,
    OpenComponent,
    CentralAjudaComponent,
    AtualizaPostComponent,
    QueroAjudarComponent,
    ListagemAdocaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
