import { MovimentacaoService } from './../services/movimentacao.service';
import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import jwtDecode from "jwt-decode";

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.css']
})
export class MovimentacaoComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private movitacaoService: MovimentacaoService) { }

  ngOnInit(): void {
  }

  create(){

    this.movitacaoService.create(this.usuario);

}
}