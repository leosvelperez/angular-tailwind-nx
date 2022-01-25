import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Lib1Module } from '@angular-tailwind-nx/lib1';
import { Lib2Module } from '@angular-tailwind-nx/lib2';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
