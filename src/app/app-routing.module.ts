import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './guards/auth/auth-guard.service';
import {CreerAfficheComponent} from './components/creer-affiche/creer-affiche.component';
import {ListeAffcihesComponent} from './components/liste-affcihes/liste-affcihes.component';
import {ListeFilmsComponent} from './components/liste-films/liste-films.component';
import {AuthentificationComponent} from './components/authentification/authentification.component';
import {AjouterFilmComponent} from './components/ajouter-film/ajouter-film.component';
import {DetailsFilmComponent} from './components/details-film/details-film.component';
import {ListeFilmsAdminComponent} from './components/liste-films-admin/liste-films-admin.component';
import {AcheterTicketFilmComponent} from './components/acheter-ticket-film/acheter-ticket-film.component';
import {ModifierFilmComponent} from './components/modifier-film/modifier-film.component';

const routes: Routes = [
  // { path: '', canActivate: [AuthGuardService], component: AppareilViewComponent },
  { path: '', redirectTo: 'affiches', pathMatch: 'full' },
  {path: 'connexion', component: AuthentificationComponent},
  {path: 'affiches', component: ListeAffcihesComponent},
  {path: 'affiches/ajout', canActivate: [AuthGuardService], component: CreerAfficheComponent},
  {path: 'affiches/v/:idAffiche', component: ListeFilmsComponent},
  {path: 'affiches/v/:idAffiche/f/:idFilm', component: DetailsFilmComponent},
  {path: 'films', canActivate: [AuthGuardService], component: ListeFilmsAdminComponent},
  {path: 'films/ajout', canActivate: [AuthGuardService], component: AjouterFilmComponent},
  {path: 'films/v/:idFilm', component: DetailsFilmComponent},
  {path: 'films/u/:idFilm', canActivate: [AuthGuardService], component: ModifierFilmComponent},
  {path: 'tickets/a/:idAffiche/f/:idFilm', component: AcheterTicketFilmComponent},
  { path: '**', redirectTo: 'affiches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
