import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Usuario } from "../models/usuario";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  fazerLogin() {
   
    console.log("passou pelo login");
    this.authService.fazerLogin(this.usuario);
  }

  /*async onSubmit(){
     //console.log(this.usuario);

     try {
      const result = await this.authService.fazerLogin(this.usuario);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }

  }*/
}
