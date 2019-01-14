import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {AdminService} from '../../services/admin/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements  CanActivate {

  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.adminService.isConnected()) {
      return true;
    } else {
      this.router.navigate(['connexion']);
    }
  }
}
