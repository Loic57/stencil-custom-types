import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentLibraryModule } from 'component-library';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


import { CheckboxAccessorDirective } from '../directives/checkbox-accessor.directive';
import { RadioAccessorDirective } from '../directives/radio-accessor.directive';
import { InputAccessorDirective } from '../directives/input-accessor.directive';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxAccessorDirective,
    RadioAccessorDirective,
    InputAccessorDirective
  ],
  imports: [
    BrowserModule,
    ComponentLibraryModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
