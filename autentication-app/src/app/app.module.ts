import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './main/app.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RouterComponent } from './router/router.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RouterComponent
  ],
  imports: [ BrowserModule, routing, FormsModule, ReactiveFormsModule ],
  providers: [],
  bootstrap: [ RouterComponent ]
})
export class AppModule { }
