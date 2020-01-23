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
import { ConfiguracoesComponent } from './Variavel/configuracoes/configuracoes.component';
import { DetalheComponent } from './Variavel/detalhe/detalhe.component';
import { OpenComponent } from './Variavel/open/open.component';
import { CentralAjudaComponent } from './Variavel/central-ajuda/central-ajuda.component';

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
    CentralAjudaComponent
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
