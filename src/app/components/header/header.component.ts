import {Component, OnDestroy, OnInit} from '@angular/core';
import {AdminService} from '../../services/admin/admin.service';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  appSubcriction: Subscription;
  isAdminConnected = false;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.appSubcriction = this.adminService.appSubject.subscribe(
      (isCon: boolean) => {
        this.isAdminConnected = isCon;
      }
    );
    this.adminService.getServiceSubject();
  }

  ngOnDestroy() {
    this.appSubcriction.unsubscribe();
  }

  deconnexion() {
    this.adminService.deconnexion();
  }
}
