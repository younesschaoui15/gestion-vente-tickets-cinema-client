import {FilmAffiche} from "./film-affiche";

export class Reservation {
  id: number;
  nomClient: string;
  prenomClient: string;
  numCarte: string;
  filmAffiche: FilmAffiche;
}
