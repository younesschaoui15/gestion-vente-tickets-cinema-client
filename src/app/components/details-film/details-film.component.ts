import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../services/client/client.service";
import {Affiche} from "../../classes/affiche";
import {Film} from "../../classes/film";
import {FilmAffiche} from "../../classes/film-affiche";

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {

  private idFilm: any;
  private idAffiche: any;
  private isReserve: boolean;

  private film: Film;
  private affiche: Affiche;
  private filmAffiche: FilmAffiche;
  constructor(private clientService: ClientService, private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.idAffiche = this.router.snapshot.params['idAffiche'];
    this.idFilm = this.router.snapshot.params['idFilm'];

    this.clientService.getAffiche(this.idAffiche)
      .subscribe( (data: Affiche) => {
        this.affiche = data;
        console.log('DATA 3 = ' + data);
      });

    this.clientService.getFilmAffiche(this.idFilm, this.idAffiche)
      .subscribe( (data: FilmAffiche) => {
        this.filmAffiche = data;
        console.log('DATA 4 = ' + data);
      });

    this.clientService.getFilm(this.idFilm)
      .subscribe( (data: Film) => {
        this.film = data;
        console.log('DATA 5 = ' + data);
      });
  }

  onReserve() {
    this.clientService.reserverPlace(this.idFilm, this.idAffiche)
      .subscribe( (data: boolean) => {
        this.isReserve = data;
        if (this.isReserve) {
          alert('Reservation Reussite !!');
          setTimeout(
            () => {
              this.route.navigate(['affiches']);
            }, 3000
          );
        } else { alert('Nous somme désolé, toutes les places sont réservées !!'); }
        console.log('DATA 6 = ' + data);
      });
  }

}
