import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportModule } from './material-import/material-import.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialImportModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
