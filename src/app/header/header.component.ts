import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false

  items = [
    { link: '/palette', name: 'Palette List' },
    { link: '/palette/ui-colors-v1', name: 'Palette' },
  ]

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isOpen = ! this.isOpen
  }

  log2(){
    console.log(222)
  }

}
