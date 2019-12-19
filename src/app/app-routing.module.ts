import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: "SobreNos", component:SobreNosComponent},
  {path: "Formulario", component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
