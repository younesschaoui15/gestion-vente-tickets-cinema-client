import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Affiche} from '../../classes/affiche';
import {Subject} from 'rxjs/index';
import {Film} from "../../classes/film";
import {FilmAffiche} from "../../classes/film-affiche";


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  private remoteServiceUrl = 'http://vente-ticket-cinema-server.herokuapp.com/api-ws';
  // private localServiceUrl = 'http://localhost:8080/user-portal/api-ws';

  getAffiches() {
    return this.http.get<Affiche[]>(this.remoteServiceUrl + '/affiches');
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getAffiche(idAffiche: any) {
    return this.http.get<Affiche>(this.remoteServiceUrl + '/affiches/' + idAffiche);
  }

  getFilm(idFilm: any) {
    return this.http.get<Film>(this.remoteServiceUrl + '/films/' + idFilm);
  }

  getFilmAffiche(idFilm: any, idAffiche: any) {
    return this.http.get<FilmAffiche>(this.remoteServiceUrl + '/filmAffiche/' + idFilm + '/' + idAffiche );
  }

  reserverPlace(idFilm: any, idAffiche: any) {
    return this.http.get(this.remoteServiceUrl + '/reserverPlace/' + idFilm + '/' + idAffiche);
    // return this.http.post<boolean>(this.remoteServiceUrl + '/reserverPlace', {'idf': idFilm, 'ida': idAffiche});
  }
}
