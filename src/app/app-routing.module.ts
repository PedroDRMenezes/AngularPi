// Importando módulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importando componentes
import { SobreNosComponent } from './Variavel/sobre-nos/sobre-nos.component';
import { FormularioComponent } from './Variavel/formulario/formulario.component';
import { HomeComponent } from './Variavel/home/home.component';

// Definindo caminhos
const routes: Routes = [
  {path: " ", redirectTo: "Home", pathMatch: "full"}, // Ainda não criada
  {path: "SobreNos", component: SobreNosComponent},
  {path: "Formulario", component: FormularioComponent},
  {path: "Home", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
