import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSuperHeroComponent } from './form-super-hero.component';

describe('FormSuperHeroComponent', () => {
  let component: FormSuperHeroComponent;
  let fixture: ComponentFixture<FormSuperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSuperHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSuperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
