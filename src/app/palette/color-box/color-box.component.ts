import { Component, OnInit, Input } from '@angular/core';
import chroma from "chroma-js";
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {

  @Input() background;
  @Input() name;
  @Input() colorId;
  copiedColorName
  copied = false
  color = 'black'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.color = chroma(this.background).luminance() >= 0.5 ? "#000319" : "whitesmoke"
  }

  onEvent(event) {
    event.stopPropagation();
    this.route.paramMap.subscribe((params: Params) => {
      this.router.navigate(['/palette', params.params.paletteId, this.colorId])
    })
  }


  copiedColor(payload: string) {
    this.copiedColorName = 'Copied ' + payload;
    this.copied = true;
    setTimeout(() => {
      this.copiedColorName = undefined;
      this.copied = false;
    }, 4000);
  }

}
