import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SuperHeroesService } from 'src/app/services/super-heroes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SuperHero } from 'src/app/services/interface/super-hero';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-form-super-hero',
  templateUrl: './form-super-hero.component.html',
  styleUrls: ['./form-super-hero.component.scss'],
})
export class FormSuperHeroComponent implements OnInit {
  @Input() action?: boolean;
  @Input() superHeroSelected?: SuperHero;
  @Output() updateAction = new EventEmitter();
  @Output() updateListSuperHero = new EventEmitter();

  public isComponentVisible: boolean = false;

  public superHeroForm!: FormGroup;

  public name?: string;
  public city?: string;
  public superpower?: string;
  public age?: number;
  public gender?: string;

  constructor(
    private _superHeroesService: SuperHeroesService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.superHeroForm = this.formBuilder.group({
      name: ['', Validators.required],
      city: ['', Validators.required],
      age: ['', Validators.required],
      superpower: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['action'] != undefined) {
      if (
        changes['action'].currentValue != undefined &&
        changes['action'].currentValue != false
      ) {
        this.superHeroSelected = undefined
        this.superHeroForm = this.formBuilder.group({
          name: ['', Validators.required],
          city: ['', Validators.required],
          age: ['', Validators.required],
          superpower: ['', Validators.required],
          gender: ['', Validators.required],
        });
        if (this.isComponentVisible == false) {
          this.toggleComponent();
        }
      }
    } else {
      if (changes['superHeroSelected'].currentValue != undefined) {
        this.superHeroForm = this.formBuilder.group({
          name: [
            changes['superHeroSelected'].currentValue.name,
            Validators.required,
          ],
          city: [
            changes['superHeroSelected'].currentValue.city,
            Validators.required,
          ],
          age: [
            changes['superHeroSelected'].currentValue.age,
            Validators.required,
          ],
          superpower: [
            changes['superHeroSelected'].currentValue.superpower,
            Validators.required,
          ],
          gender: [
            changes['superHeroSelected'].currentValue.gender,
            Validators.required,
          ],
        });
        if (this.isComponentVisible == false) {
          this.toggleComponent();
        }
      }
    }
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    if (this.superHeroForm?.valid) {
      // Acciones a realizar cuando el formulario es válido
      if(this.superHeroSelected != undefined){
        this.updateSuperHero()
      }else{
        this.saveSuperHero();
      }
    } else {
      // Acciones a realizar cuando el formulario es inválido
      console.log('Formulario inválido');
    }
  }

  updateSuperHero(){
    const body: SuperHero = {
      name: this.superHeroForm.value.name,
      city: this.superHeroForm.value.city,
      age: this.superHeroForm.value.age,
      superpower: this.superHeroForm.value.superpower,
      gender: this.superHeroForm.value.gender,
      image: this.superHeroSelected!.image,
      id: this.superHeroSelected!.id,
    };
    this._superHeroesService.updateSuperHero(body).subscribe(
      (res) => {
        this.updateListSuperHero.emit();
      }
    );
  }

  saveSuperHero() {
    // Obtener la hora actual
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Generar un número aleatorio entre 0 y 1
    const random = Math.random();

    // Multiplicar el número aleatorio por la hora actual
    const multipliedValue = random * currentHour;
    const body: SuperHero = {
      name: this.superHeroForm.value.name,
      city: this.superHeroForm.value.city,
      age: this.superHeroForm.value.age,
      superpower: this.superHeroForm.value.superpower,
      gender: this.superHeroForm.value.gender,
      image: 'assets/avatar.jpg',
      id: multipliedValue,
    };
    this._superHeroesService.createSuperHero(body).subscribe(
      (res) => {
        this.superHeroForm = this.formBuilder.group({
          name: ['', Validators.required],
          city: ['', Validators.required],
          age: ['', Validators.required],
          superpower: ['', Validators.required],
          gender: ['', Validators.required],
        });
        this.updateListSuperHero.emit();
      }
    );
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteSuperHero()
      }
    });
  }

  deleteSuperHero(){
    this._superHeroesService.deleteSuperHero(this.superHeroSelected!.id).subscribe(
      (res) => {
        this.toggleComponent();
        this.updateListSuperHero.emit();
      }
    )
  }

  closeForm() {
    this.updateAction.emit();
    this.toggleComponent();
  }

  public toggleComponent(): void {
    this.isComponentVisible = !this.isComponentVisible;
  }
}
