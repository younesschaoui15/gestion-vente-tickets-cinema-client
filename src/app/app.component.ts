import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CY-OB Tickets';
}

export interface Food {
  value: string;
  viewValue: string;
}
