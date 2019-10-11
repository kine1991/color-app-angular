import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false

  items = [
    { link: '/about', name: 'About' },
    { link: '/home', name: 'Home' },
    { link: '/blog', name: 'Blog' },
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
