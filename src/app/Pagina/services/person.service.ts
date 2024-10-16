import { Injectable } from '@angular/core';
import { Person } from '../interfaces/page.interfaces';

@Injectable({
  providedIn: 'root' // El servicio está disponible en toda la aplicación
})
export class PersonService {
  // Lista de personas con sus datos
  private person: Person[] = [
    {
      name: 'Juan Manuel de la Cruz González',
      carnet: '1790-19-21878',
      img: 'assets/juanManuel.jpeg'
    },
    {
      name: 'Rudy Isaías Morán Gómez',
      carnet: '1790-20-3374',
      img: 'assets/rudyMoran.jpeg'
    },
    {
      name: 'Kevin Santos',
      carnet: '1790-19-19560',
      img: 'assets/kevinSantos.jpg'

    },
    {
      name: 'Edwin Avimael Galicia Lima',
      carnet: '1790-15-12266',
      img: 'assets/edwinGalicia.jpg'

    }
  ];

  // Método para obtener la lista de personas
  getPerson(): Person[] {
    return this.person;
  }

  constructor() { }
}
