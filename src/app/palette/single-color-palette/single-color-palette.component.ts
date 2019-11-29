import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaletteService } from '../palette.service';
import { generatePalette } from '../colorHelper';

@Component({
  selector: 'app-single-color-palette',
  templateUrl: './single-color-palette.component.html',
  styleUrls: ['./single-color-palette.component.scss']
})
export class SingleColorPaletteComponent implements OnInit {

  format = 'hex'
  seedColors
  shades
  colorId
  paletteId

  constructor(
    paletteService: PaletteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.seedColors = paletteService.seedColors
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.paletteId = params.params.paletteId;
      this.colorId = params.params.colorId;
      // let {colorId, paletteId} = params.params;
      // console.log(this.getPaletteByLevel(paletteId));
      // console.log(this.paletteId)
      const palette = this.getPaletteByLevel(this.paletteId)
      this.shades = this.gatherShades(palette, this.colorId);
    });
    // this._shades = this.gatherShades(palette, colorId);
  }

  getPalette(paletteId){
    return this.seedColors.find(item => item.id === paletteId); // получает определенную палитру в зависимости от paletteId
  }

  getPaletteByLevel(paletteId){
    return generatePalette(this.getPalette(paletteId)); // генерирует паоитру в зависимовти от уровня цвета
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  }

  back(){
    this.router.navigate(['palette', this.paletteId])
  }

}
