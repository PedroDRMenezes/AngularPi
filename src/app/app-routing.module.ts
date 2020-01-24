// Importando módulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importando componentes
import { SobreNosComponent } from './Variavel/sobre-nos/sobre-nos.component';
import { FormularioComponent } from './Variavel/formulario/formulario.component';
import { HomeComponent } from '../app/Variavel/home/home.component';
import { PostagemIdComponent } from './Variavel/postagem-id/postagem-id.component';
import { ConfiguracoesComponent } from './variavel/configuracoes/configuracoes.component';
import { DetalheComponent } from './variavel/detalhe/detalhe.component';
import { OpenComponent } from './variavel/open/open.component';
import { CentralAjudaComponent } from './variavel/central-ajuda/central-ajuda.component';
import { AtualizaPostComponent } from './variavel/atualiza-post/atualiza-post.component';


// Definindo caminhos
const routes: Routes = [
  { path: "SobreNos", component: SobreNosComponent },
  { path: "Formulario", component: FormularioComponent },
  { path: "Home", component: HomeComponent },
  { path: "BuscaId", component: PostagemIdComponent },
  { path: "config", component: ConfiguracoesComponent },
  { path: 'detalhe/:id', component: DetalheComponent },
  { path: "", component: OpenComponent },
  { path: "centralAjuda", component: CentralAjudaComponent },
  { path: "Home/ATP/:id", component: AtualizaPostComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
