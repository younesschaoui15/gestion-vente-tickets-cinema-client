import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client/client.service";
import {ActivatedRoute} from "@angular/router";
import {Film} from "../../classes/film";
import {Affiche} from "../../classes/affiche";

@Component({
  selector: 'app-liste-films',
  templateUrl: './liste-films.component.html',
  styleUrls: ['./liste-films.component.css']
})
export class ListeFilmsComponent implements OnInit {

  private idAffiche: any;
  affiche: Affiche;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.idAffiche = this.route.snapshot.params['idAffiche'];
    this.clientService.getAffiche(this.idAffiche)
      .subscribe( (data: Affiche) => {
        this.affiche = data;
        console.log('DATA 2 = ' + data);
      });
  }

}
