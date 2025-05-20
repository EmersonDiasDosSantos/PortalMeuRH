import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'Cadastro', pathMatch: 'full' }, // Redireciona para Cadastro ao iniciar
  { path: 'Cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
