import { MovimentacaoComponent } from "./movimentacao/movimentacao.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardGuard } from "./guards/auth-guard.guard";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuardGuard] },

  { path: "home", component: HomeComponent, canActivate: [AuthGuardGuard] },

  {
    path: "movimentacao",
    component: MovimentacaoComponent,
    canActivate: [AuthGuardGuard],
  },

  { path: "login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
