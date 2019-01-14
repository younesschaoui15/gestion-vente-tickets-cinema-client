import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client/client.service';
import {Affiche} from '../../classes/affiche';

@Component({
  selector: 'app-liste-affcihes',
  templateUrl: './liste-affcihes.component.html',
  styleUrls: ['./liste-affcihes.component.css']
})
export class ListeAffcihesComponent implements OnInit {

  affiches: Affiche[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAffiches()
      .subscribe( (data: Affiche[]) => {
        this.affiches = data;
        console.log('DATA 1 = ' + data);
      });
  }

}
