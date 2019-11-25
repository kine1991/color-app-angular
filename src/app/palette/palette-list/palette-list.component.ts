import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette.service';

@Component({
  selector: 'app-palette-list',
  templateUrl: './palette-list.component.html',
  styleUrls: ['./palette-list.component.scss']
})
export class PaletteListComponent implements OnInit {

  seedColors

  constructor(paletteService: PaletteService) {
    this.seedColors = paletteService.seedColors;
  }

  // console.log(paletteService)

  ngOnInit() {
    // console.log(paletteService.xxx)
    // paletteService
    console.log('this.', this.seedColors)
  }

  test(){
    // console.log(paletteService.xxx)
  }

}
