import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [],
    exports: [
        MatSliderModule,
        MatGridListModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule
    ],
    providers: [],
})
export class AngularMaterialModule { }
