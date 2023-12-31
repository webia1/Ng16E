import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidenav-content',
  templateUrl: './dashboard-sidenav-content.component.html',
  styleUrls: ['./dashboard-sidenav-content.component.scss'],
})
export class DashboardSidenavContentComponent {
  @Input() leftSideNavOpen;
  @Input() rightSideNavOpen;
}
