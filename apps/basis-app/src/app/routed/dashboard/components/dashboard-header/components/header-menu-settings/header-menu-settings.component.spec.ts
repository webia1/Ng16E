import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderMenuSettingsComponent } from './header-menu-settings.component';

describe('HeaderMenuSettingsComponent', () => {
  let component: HeaderMenuSettingsComponent;
  let fixture: ComponentFixture<HeaderMenuSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderMenuSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMenuSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
