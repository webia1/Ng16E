import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderLangSettingComponent } from './header-lang-setting.component';

describe('HeaderLangSettingComponent', () => {
  let component: HeaderLangSettingComponent;
  let fixture: ComponentFixture<HeaderLangSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderLangSettingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderLangSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
