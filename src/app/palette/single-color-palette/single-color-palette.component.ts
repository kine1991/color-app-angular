import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PaletteService } from '../palette.service';

@Component({
  selector: 'app-single-color-palette',
  templateUrl: './single-color-palette.component.html',
  styleUrls: ['./single-color-palette.component.scss']
})
export class SingleColorPaletteComponent implements OnInit {

  format = 'hex'
  shades
  colorId
  paletteId

  constructor(
    private paletteService: PaletteService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.paletteId = params.params.paletteId;
      this.colorId = params.params.colorId;
      const palette = this.paletteService.getPaletteByLevel(this.paletteId);
      this.shades = this.gatherShades(palette, this.colorId);
    });
  }

  gatherShades(palette, colorToFilterBy) {
    return this.paletteService.gatherShades(palette, colorToFilterBy);
  }

  goBack(){
    this.router.navigate(['palette', this.paletteId])
  }

}
