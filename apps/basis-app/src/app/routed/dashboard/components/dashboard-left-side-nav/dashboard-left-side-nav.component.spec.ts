import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardLeftSideNavComponent } from './dashboard-left-side-nav.component';

describe('DashboardLeftSideNavComponent', () => {
  let component: DashboardLeftSideNavComponent;
  let fixture: ComponentFixture<DashboardLeftSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardLeftSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardLeftSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
