import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderSecctions } from 'src/app/shared/interfaces/header.interface';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('config') config: ElementRef;
  @ViewChild('battle') battle: ElementRef;

  constructor(
    private headerService: HeaderService,
  ) { }

  ngOnInit(): void { 
    this.headerService.changeHeader.subscribe((data: HeaderSecctions) => {
      console.log("DATAAA: ", data)
      if(data === HeaderSecctions.configuration){
        this.battle.nativeElement.classList.remove('active');
        this.battle.nativeElement.classList.remove('disabled');
        this.config.nativeElement.classList.add('active');
      }
      if(data === HeaderSecctions.battle){
        this.config.nativeElement.classList.remove('active');
        this.config.nativeElement.classList.remove('disabled');
        this.battle.nativeElement.classList.add('active');
      }
    })
  }

  changeActive(event){
    const navItems = document.querySelector(".nav.nav-tabs");
    if(navItems.getElementsByClassName("nav-link active").length){
      navItems.getElementsByClassName("nav-link active")[0].classList.remove("active");
    }
    event.target.classList.add("active");
  }
}