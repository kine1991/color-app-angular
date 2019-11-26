import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../palette.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.scss']
})
export class PaletteComponent implements OnInit {

  seedColors;
  palette;

  constructor(
    paletteService: PaletteService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.seedColors = paletteService.seedColors;
  }

  getPalette(paletteId){
    return this.seedColors.filter(item => item.id === paletteId);
    // console.log('params', paletteId)
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      let paletteId = params.params.paletteId;
      this.palette = this.getPalette(paletteId)[0];
      // console.log()
  });
    // console.log('params', paletteId)
    // this.route.params.subscribe((params: Params) => {
    //   console.log('params', params)
    // })
    console.log(this.seedColors)
  }

}
