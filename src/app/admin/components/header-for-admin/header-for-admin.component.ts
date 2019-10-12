import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-for-admin',
  templateUrl: './header-for-admin.component.html',
  styleUrls: ['./header-for-admin.component.scss']
})
export class HeaderForAdminComponent implements OnInit {
  isOpen = true

  items = [
    { link: '/admin/dashboard', name: 'Dashboard' },
    { link: '/admin/create', name: 'Create' },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toggle(){
    this.isOpen = !this.isOpen
  }

  logout(event: Event){
    // console.log('logout', event)
    event.preventDefault()
    this.router.navigate(['/admin', 'login'])
  }
}
