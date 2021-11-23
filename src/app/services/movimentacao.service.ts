import { HttpClient } from '@angular/common/http';
import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

constructor(private http: HttpClient) { }

create(usuario: Usuario){

  console.log(usuario.username);
   this.http.post<Usuario>("http://localhost:8080/movimentacao/salvar",usuario).toPromise();
  }
}


