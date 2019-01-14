import {FilmAffichePK} from './film-affiche-pk';
import {Reservation} from './reservation';

export class FilmAffiche {
  pk: FilmAffichePK;
  horaire: string;
  salle: string;
  prix: number;
  nbrPlaces: number;
  reservations: Reservation[];
}

