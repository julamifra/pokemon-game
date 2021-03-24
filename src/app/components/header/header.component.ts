import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeActive(event){
    const navItems = document.querySelector(".nav.nav-tabs");
    if(navItems.getElementsByClassName("nav-link active").length){
      navItems.getElementsByClassName("nav-link active")[0].classList.remove("active");
    }
    event.target.classList.add("active");
  }
}
