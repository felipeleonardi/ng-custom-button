import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgCustomButtonComponent } from './ng-custom-button.component';

@NgModule({
  declarations: [NgCustomButtonComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgCustomButtonComponent]
})
export class NgCustomButtonModule { }
