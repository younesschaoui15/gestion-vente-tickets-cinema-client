import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule,
  MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
} from '@angular/material';
import 'hammerjs';

// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeFilmsComponent } from './components/liste-films/liste-films.component';
import { DetailsFilmComponent } from './components/details-film/details-film.component';
import { AcheterTicketFilmComponent } from './components/acheter-ticket-film/acheter-ticket-film.component';
import { AjouterFilmComponent } from './components/ajouter-film/ajouter-film.component';
import { CreerAfficheComponent } from './components/creer-affiche/creer-affiche.component';
import { ListeFilmsAdminComponent } from './components/liste-films-admin/liste-films-admin.component';
import { ModifierFilmComponent } from './components/modifier-film/modifier-film.component';

import {AuthGuardService} from './guards/auth/auth-guard.service';
import {ClientService} from './services/client/client.service';
import {AdminService} from './services/admin/admin.service';
import { ListeAffcihesComponent } from './components/liste-affcihes/liste-affcihes.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListeFilmsComponent,
    DetailsFilmComponent,
    AcheterTicketFilmComponent,
    AjouterFilmComponent,
    CreerAfficheComponent,
    ListeFilmsAdminComponent,
    ModifierFilmComponent,
    ListeAffcihesComponent,
    AuthentificationComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgxMaterialTimepickerModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    AuthGuardService,
    AdminService,
    ClientService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
