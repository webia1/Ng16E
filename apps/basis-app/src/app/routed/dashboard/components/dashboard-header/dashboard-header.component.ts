import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss'],
})
export class DashboardHeaderComponent {
  @Input() leftSidenav!: MatSidenav;
  @Input() rightSidenav!: MatSidenav;

  selectedLanguage = 'de';
  languages = [
    { value: 'de', viewValue: 'Deutsch' },
    { value: 'en', viewValue: 'English' },
    { value: 'fr', viewValue: 'Français' },
  ];

  toggleLeftSidenav() {
    this.leftSidenav.toggle();
  }

  toggleRightSidenav() {
    this.rightSidenav.toggle();
  }
}
