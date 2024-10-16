import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  persona:any ={}

  constructor( private _routeActived:ActivatedRoute,
               private _persona:PersonService){

    this._routeActived.params.subscribe(params =>{
      console.log (params ['id']);
      // this.persona = this._persona.getPerson( params['id'])
    })

  }


}
