import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('leftSidenav') leftSidenav!: MatSidenav;
  @ViewChild('rightSidenav') rightSidenav!: MatSidenav;

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
