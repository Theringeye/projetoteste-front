import { AuthInterceptor } from './http-interceptors/auth-interceptor';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovimentacaoComponent } from './movimentacao/movimentacao.component'; 
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthService } from './login/auth.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_BASE_HREF } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MovimentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardGuard, 
  {provide: APP_BASE_HREF, useValue: '/' }, 
  {provide:  HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
