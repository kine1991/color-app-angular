import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette.service';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  seedColors

  constructor(paletteService: PaletteService) {
    this.seedColors = paletteService.seedColors;
  }

  ngOnInit() {
    console.log(this.seedColors)
  }

}
