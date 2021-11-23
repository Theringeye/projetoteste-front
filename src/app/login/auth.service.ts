import { Usuario } from "./../models/usuario";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private usuarioAutenticado: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  async fazerLogin(usuario: Usuario) {
    console.log("passou pelo servico do login antes do resultado ");

    const result = await this.http
      .post("http://localhost:8080/login", usuario, { responseType: "text" })
      .toPromise();

    console.log("passou pelo servico do login depois do resultado ");

    if (result) {
      console.log("setou o token com valor de: " + result);
      window.localStorage.setItem("token", result);
      this.usuarioAutenticado = true;
      this.router.navigate(["/home"]);
    } else {
      this.usuarioAutenticado = false;
      //window.localStorage.clear();
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  getAutorizacaoToken() {
    const token = window.localStorage.getItem("token");
    console.log("passou por getAutorizacaoToken: " + token);
    console.log("resgatou o token " + token);
    return token;
  }

  getDataExpiracaoToken(token: string): Date {
    console.log("entrou no metodo q verifica a data do token - antes ");
    const decode: any = this.getDecodedAccessToken(token);
    console.log("entrou no metodo q verifica a data do token ");

    if (decode.exp === undefined) {
      console.log("token não é valido");
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decode.exp);
    console.log(date);
    return date;
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getDataExpiracaoToken(token);

    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLogado() {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      return false;
    } 
    if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  /*fazerLogin(usuario: any){

const result = await this.http.post<any>('http://localhost:8080/login',usuario).toPromise();

if(result && result.acess_token){
  window.localStorage.setItem('token',result.acess_token);
  console.log('passou aqui');
  return true;
}

return false;
 

}*/

  /*fazerLogin(user: any) {
  return new Promise((resolve) => {
    window.localStorage.setItem('token', 'meu-token');
    resolve(true);
  });
}*/
}
