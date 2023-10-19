import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportModule } from './material-import/material-import.module';
import { AppComponent } from './app.component';
import { TablaAlumnoComponent } from './tabla-alumno/tabla-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaAlumnoComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
