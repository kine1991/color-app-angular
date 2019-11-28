import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit {

  @Input() color;
  @Input() name;
  copiedColorName

  constructor() { }

  ngOnInit() {
    // console.log(this.name)
  }

  copiedColor(payload: string) {
    this.copiedColorName = payload;
    setTimeout(() => {
      this.copiedColorName = undefined;
    },3000);
    // console.info(`'${payload}' has been copied to clipboard`);
 }

}
