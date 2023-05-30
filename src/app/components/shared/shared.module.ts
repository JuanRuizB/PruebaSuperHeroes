import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, ConfirmationDialogComponent],
  imports: [CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule, MatDialogModule],
  exports: [HeaderComponent, FooterComponent, ConfirmationDialogComponent],
})
export class SharedModule {}
