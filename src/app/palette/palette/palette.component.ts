import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PaletteService } from '../palette.service';
import { generatePalette } from '../colorHelper'

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  seedColors;
  palette;
  level = 700;
  format = 'hex';

  constructor(
    paletteService: PaletteService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.seedColors = paletteService.seedColors;
  }

  getPalette(paletteId){
    return this.seedColors.find(item => item.id === paletteId); // получает определенную палитру в зависимости от paletteId
  }

  getPaletteByLevel(paletteId){
    return generatePalette(this.getPalette(paletteId)); // генерирует паоитру в зависимовти от уровня цвета
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      let paletteId = params.params.paletteId;
      this.palette = this.getPaletteByLevel(paletteId);
    });
    // console.log('params', paletteId)
    // console.log(this.getPaletteByLevel(paletteId))
    // this.route.params.subscribe((params: Params) => {
    //   console.log('params', params)
    // })
    // console.log(this.seedColors)
  }

}
