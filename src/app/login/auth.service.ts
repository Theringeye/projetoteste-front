import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }


fazerLogin(usuario: Usuario){

  this.router.navigate(['/']);

}

  

}
