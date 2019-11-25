import { Injectable } from '@angular/core';

import { seedColors } from './seedColors'

@Injectable({
  providedIn: 'root'
})
export class PaletteService {

  seedColors = seedColors

  xxx = 'ooo'

  constructor() { }
}
