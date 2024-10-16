import { Component, OnInit } from '@angular/core';
import { Person } from '../../../interfaces/page.interfaces';
import { PersonService } from '../../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  persona:Person[]=[]

  constructor(private _persona:PersonService,
              private router:Router
  ){}

  ngOnInit(): void {
    this.persona = this._persona.getPerson();
    console.log(this.persona)
  }

  verPersona(id: number) {
    console.log("ID de la persona a navegar:", id);
    if (id !== undefined) {
        this.router.navigate(['/person', id]);
    } else {
        console.error("ID no válido");
    }
}

}
