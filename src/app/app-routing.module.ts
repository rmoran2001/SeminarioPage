import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './Pagina/components/person/person/person.component';
import { HomeComponent } from './Pagina/components/home/home/home.component';
import { AboutComponent } from './Pagina/components/about/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'person/:id', component: PersonComponent },
  { path: 'person', redirectTo: '/home', pathMatch: 'full' }, // Redirige a 'home' si solo se accede a 'person'
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },// Ruta para acceder a los detalles de la persona


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
