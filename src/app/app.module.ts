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
import { PostagemIdComponent } from './postagem-id/postagem-id.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { OpenComponent } from './open/open.component';

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
    OpenComponent
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
