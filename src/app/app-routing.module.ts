// Importando módulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importando componentes
import { SobreNosComponent } from './Variavel/sobre-nos/sobre-nos.component';
import { FormularioComponent } from './Variavel/formulario/formulario.component';
import { HomeComponent } from '../app/Variavel/home/home.component';
import { PostagemIdComponent } from './postagem-id/postagem-id.component';

// Definindo caminhos
const routes: Routes = [
  {path: "", redirectTo: "Home", pathMatch: "full"}, // Ainda não criada
  {path: "SobreNos", component: SobreNosComponent},
  {path: "Formulario", component: FormularioComponent},
  {path: "Home", component:HomeComponent},
  {path: "BuscaId", component:PostagemIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
