// Importando módulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importando componentes
import { SobreNosComponent } from './Variavel/sobre-nos/sobre-nos.component';
import { FormularioComponent } from './Variavel/formulario/formulario.component';
import { HomeComponent } from '../app/Variavel/home/home.component';
import { PostagemIdComponent } from './postagem-id/postagem-id.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { OpenComponent } from './open/open.component';


// Definindo caminhos
const routes: Routes = [
  {path: "SobreNos", component: SobreNosComponent},
  {path: "Formulario", component: FormularioComponent},
  {path: "Home", component:HomeComponent},
  {path: "BuscaId", component:PostagemIdComponent},
  {path: "config", component:ConfiguracoesComponent},
  {path: 'detalhe/:id',component:DetalheComponent},
  {path: "", component:OpenComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
