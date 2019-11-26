import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PaletteListComponent } from './palette/palette-list/palette-list.component';
import { PaletteComponent } from './palette/palette/palette.component';


const routes: Routes = [
  { path: 'palette', component: PaletteListComponent },
  { path: 'palette/:paletteId', component: PaletteComponent },
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
