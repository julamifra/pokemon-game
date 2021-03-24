import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.sass']
})
export class ConfigurationComponent implements OnInit {


  languageSelected: string = "Select a language";

  constructor() { }

  ngOnInit(): void {}

  selectDropDown(event: Event){
    this.languageSelected = (event.target as HTMLElement).innerText
  }

}
