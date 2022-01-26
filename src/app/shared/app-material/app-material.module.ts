//Esta pasta é onde é feito o compartilhamento de outros módulos da aplicação
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  exports: [
    MatCardModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class AppMaterialModule { }
