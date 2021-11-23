import { AuthService } from "./../login/auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = window.localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      console.log("passou pelo guard");
      this.router.navigate(["/login"]);
      return false;
    }

    return false;
  }*/

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    
    //if(this.authService.isUserLogado){
      console.log(
        "passou pela condição islogado");
    const token = window.localStorage.getItem("token");

    if (token) {
      console.log(
        "está passando pelo guard varias vezes e recuperando o token: " + token);
      
      if(this.authService.isTokenExpired(token)){
        console.log(
          "token expirou - nova validação dentro authguard: " + token);
        this.router.navigate(["/login"]);
        return false;
      }

      return true;
      }else {
      console.log("passou pelo guard - não ta autenticado ou token expirou");
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
