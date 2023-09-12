import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardRightSideNavComponent } from './dashboard-right-side-nav.component';

describe('DashboardRightSideNavComponent', () => {
  let component: DashboardRightSideNavComponent;
  let fixture: ComponentFixture<DashboardRightSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardRightSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardRightSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
