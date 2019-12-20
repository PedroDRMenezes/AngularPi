// Importando módulos
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importando componentes
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FormularioComponent } from './formulario/formulario.component';

// Definindo caminhos
const routes: Routes = [
  {path: " ", redirectTo: "Home", pathMatch: "full"}, // Ainda não criada
  {path: "SobreNos", component: SobreNosComponent},
  {path: "Formulario", component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
