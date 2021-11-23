import { Observable } from "rxjs";
import { AuthService } from "./../login/auth.service";
import {
  HttpInterceptor,
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const token = this.authService.getAutorizacaoToken();



    console.log("passou pelo interceptor");

    console.log("o valor do token é: " + token);

    if(this.authService.isTokenExpired(token)){
      console.log("passou na limpeza do token");
      console.log("o valor do token agora é: " + token);
       window.localStorage.clear();
       token == "";
       this.router.navigate(["/login"]);
    }
    
    const request = req.clone({
      
      headers: req.headers.set("Authorization", token ? "Bearer " + token : ""),
    });

    console.log("setou o token dentro do header" + token)
    return next.handle(request);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("ocorreu um erro", error.error.message);
    } else {
      console.error("codigo do erro " + error.status, "Erro: ");
    }
  }
}


