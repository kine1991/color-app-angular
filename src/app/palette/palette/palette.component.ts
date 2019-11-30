import { Component, OnInit } from '@angular/core';
import { /*Router,*/ ActivatedRoute, Params } from '@angular/router';

import { PaletteService } from '../palette.service';

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

  prev = undefined;
  next = undefined;

  constructor(
    private paletteService: PaletteService,
    private route: ActivatedRoute,
    // private router: Router,
  ) {}


  getPaletteByLevel(paletteId){
    return this.paletteService.getPaletteByLevel(paletteId)
  }

  getPervAndNextPalette(paletteId){
    let allPaletteId = this.paletteService.seedColors
    let arrayPaletteId = [];
    allPaletteId.map(paletteId => {
      arrayPaletteId.push(paletteId.id);
    })

    let index = arrayPaletteId.findIndex(item => item === paletteId);
    // console.log('arrayPaletteId[index]', arrayPaletteId[index+1]);

    if(arrayPaletteId[index + 1]){
      this.next = arrayPaletteId[index + 1]
    }else {
      this.next = arrayPaletteId[0]
    }
    if(arrayPaletteId[index - 1]){
      this.prev = arrayPaletteId[index - 1]
    }else {
      this.prev = arrayPaletteId[arrayPaletteId.length - 1]
    }

    // return this.paletteService.seedColors
  }

  ngOnInit() {
    this.seedColors = this.paletteService.seedColors;
    this.route.paramMap.subscribe((params: Params) => {
      let paletteId = params.params.paletteId;
      this.palette = this.getPaletteByLevel(paletteId);
      this.getPervAndNextPalette(paletteId)
    });
  }

}
