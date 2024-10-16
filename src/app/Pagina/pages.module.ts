import { NgModule } from '@angular/core';
import { MainPagesComponent } from './pages/main-pages.components';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import { HomeComponent } from './components/home/home/home.component';
import { PersonComponent } from './components/person/person/person.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './components/about/about/about.component';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterOutlet,
    AppRoutingModule


  ],
  exports: [MainPagesComponent],
  declarations: [MainPagesComponent, NavbarComponent, HomeComponent, PersonComponent, AboutComponent],
  providers: [],
})
export class PagesModule { }
