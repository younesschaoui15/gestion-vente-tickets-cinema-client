import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  appSubject = new Subject<boolean>();
  private isAdminConnected = false;
  constructor() { }

  getServiceSubject() {
    this.appSubject.next(this.isConnected().valueOf());
  }
  isConnected() {
    return this.isAdminConnected;
  }

  connexion(username: string, password: string): boolean {
    const un = 'admin';
    const pw = 'admin';
    if (username === un && password === pw ) {
      this.isAdminConnected = true;
      this.getServiceSubject();
      return true;
    } else {
      return false;
    }
  }

  deconnexion() {
    this.isAdminConnected = false;
    this.getServiceSubject();
  }
}
