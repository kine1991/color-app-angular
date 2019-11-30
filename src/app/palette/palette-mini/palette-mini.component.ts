import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-palette-mini',
  templateUrl: './palette-mini.component.html',
  styleUrls: ['./palette-mini.component.scss']
})
export class PaletteMiniComponent implements OnInit {

  @Input() palette

  constructor() { }

  ngOnInit() {
    // console.log(this.palette)
  }

}
