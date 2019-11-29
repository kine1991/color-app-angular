import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PaletteListComponent } from './palette/palette-list/palette-list.component';
import { PaletteComponent } from './palette/palette/palette.component';
import { SingleColorPaletteComponent } from './palette/single-color-palette/single-color-palette.component';


const routes: Routes = [
  { path: 'palette', component: PaletteListComponent },
  { path: 'palette/:paletteId', component: PaletteComponent },
  { path: 'palette/:paletteId/:colorId', component: SingleColorPaletteComponent },
  // {path: '', component: MainLayoutComponent, children: [
  //   // {path: '', redirectTo: '/', pathMatch: 'full'},
  //   // {path: '', component: HomePageComponent},
  // ]},
  // // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
