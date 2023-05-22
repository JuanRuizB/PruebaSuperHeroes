import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct title', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    const titleElement = headerElement.querySelector('h1');
    expect(titleElement?.textContent).toContain(component.title);
  });

  it('should have the correct background color', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    expect(headerElement.style.backgroundColor).toBe('rgb(63, 81, 181)');
  });

  it('should have the correct text color', () => {
    const headerElement: HTMLElement = fixture.nativeElement;
    expect(headerElement.style.color).toBe('rgb(205, 220, 57)');
  });
});
