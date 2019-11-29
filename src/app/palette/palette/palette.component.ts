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

  constructor(
    private paletteService: PaletteService,
    private route: ActivatedRoute,
    // private router: Router,
  ) {}


  getPaletteByLevel(paletteId){
    return this.paletteService.getPaletteByLevel(paletteId)
  }

  ngOnInit() {
    this.seedColors = this.paletteService.seedColors;
    this.route.paramMap.subscribe((params: Params) => {
      let paletteId = params.params.paletteId;
      this.palette = this.getPaletteByLevel(paletteId);
    });
  }

}
