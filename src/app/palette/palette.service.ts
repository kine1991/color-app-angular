import { Injectable } from '@angular/core';

import { seedColors } from './seedColors'
import { generatePalette } from './colorHelper';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  seedColors = seedColors

  xxx = 'ooo'

  constructor() { }

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
}
