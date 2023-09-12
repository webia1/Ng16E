import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardSidenavContentComponent } from './dashboard-sidenav-content.component';

describe('DashboardSidenavContentComponent', () => {
  let component: DashboardSidenavContentComponent;
  let fixture: ComponentFixture<DashboardSidenavContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardSidenavContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
