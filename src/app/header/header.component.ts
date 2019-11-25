import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false

  items = [
    { link: '/', name: 'Palette List' },
    { link: '/palette', name: 'Palette' },
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
