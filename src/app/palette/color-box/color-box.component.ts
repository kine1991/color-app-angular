import { Component, OnInit, Input } from '@angular/core';
import chroma from "chroma-js";

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {

  @Input() color;
  @Input() name;
  copiedColorName
  copied = false
  fontColor = 'black'

  constructor() { }

  ngOnInit() {
    // console.log(this.name)
    this.fontColor = chroma(this.color).luminance() >= 0.5 ? "#000319" : "whitesmoke"
  }

  onEvent(event) {
    event.stopPropagation();
    // console.log('ddd', event)
    // event.stopPropagation();
 }


  copiedColor(payload: string) {
    this.copiedColorName = 'Copied ' + payload;
    this.copied = true;
    setTimeout(() => {
      this.copiedColorName = undefined;
      this.copied = false;
    }, 4000);
    // console.info(`'${payload}' has been copied to clipboard`);
 }

}
