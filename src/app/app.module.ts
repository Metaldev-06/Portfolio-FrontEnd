import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AcercaDeComponent } from './components/inicio/acerca-de/acerca-de.component';
import { ExpLaboralComponent } from './components/inicio/exp-laboral/exp-laboral.component';
import { EducacionComponent } from './components/inicio/educacion/educacion.component';
import { HabilidadesComponent } from './components/inicio/habilidades/habilidades.component';
import { ProyectosComponent } from './components/inicio/proyectos/proyectos.component';
import { PagErrorComponent } from './components/pag-error/pag-error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    LoginComponent,
    RegisterComponent,
    AcercaDeComponent,
    ExpLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    PagErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:InicioComponent},
      {path: 'error', component:PagErrorComponent},
      {path: 'register', component:RegisterComponent},
      {path: '**', redirectTo:'/error', pathMatch:'full'},

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
