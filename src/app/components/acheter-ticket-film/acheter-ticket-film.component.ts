import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-acheter-ticket-film',
  templateUrl: './acheter-ticket-film.component.html',
  styleUrls: ['./acheter-ticket-film.component.css']
})
export class AcheterTicketFilmComponent implements OnInit {
  private idAffiche: any;
  private idFilm: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.idAffiche = this.route.snapshot.params['idAffiche'];
    this.idFilm = this.route.snapshot.params['idFilm'];
  }

}
