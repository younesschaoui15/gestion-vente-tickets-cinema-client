import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin/admin.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  isConnectionValid = true;
  mpCache = true;
  username: string;
  password: string;
  constructor(private adminService: AdminService, private route: Router) { }

  ngOnInit() {
  }

  connexion() {
    this.isConnectionValid = this.adminService.connexion(this.username, this.password);
    console.log(this.isConnectionValid);
    if (this.isConnectionValid) {
      this.route.navigate(['films']);
    }
  }

  deconnexion() {
    this.adminService.deconnexion();
  }
}
