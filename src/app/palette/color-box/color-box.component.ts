import { Component, OnInit, Input } from '@angular/core';
import chroma from "chroma-js";

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

  constructor() { }

  ngOnInit() {
    this.color = chroma(this.background).luminance() >= 0.5 ? "#000319" : "whitesmoke"
  }

  onEvent(event) {
    event.stopPropagation();
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
