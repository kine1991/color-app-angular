import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import ruLocale from '@angular/common/locales/ru';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ColorBoxComponent } from './palette/color-box/color-box.component';
import { PaletteComponent } from './palette/palette/palette.component';
import { PaletteListComponent } from './palette/palette-list/palette-list.component';


registerLocaleData(ruLocale, 'ru')


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColorBoxComponent,
    PaletteComponent,
    PaletteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
