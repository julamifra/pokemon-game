import { Component, EventEmitter, OnInit } from '@angular/core';
import { ILiteralsCardConfig, Secctions } from './configuration.interface';
import { Languages, RenderType, Theming } from "./configuration.interface"

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  literals: ILiteralsCardConfig = {
    header: 'Language',
    text: 'Choose your language',
    title: 'Here you can choose your language by selecting in the dropdown what you want.',
    button: 'Select a language'
  };

  elementsDropDown: string[] = Object.values(Languages);
  secctions: string[][] = Object.entries(Secctions);
  secctionSelected: string = Object.entries(Secctions)[0][0];

  dataSaved = {};

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.getElementById(this.secctions.find(el=> el[1] === Secctions.language)[0]).classList.add('active');
  }

  ngAfterViewChecked(){
    if(Object.keys(this.dataSaved).filter(el=> Object.keys(Secctions).includes(el)).length === Object.keys(Secctions).length){
      const btn: HTMLButtonElement | any = document.getElementById('start-game-button');
      btn.disabled = false;
      btn.style.cursor = 'pointer';
    }
  }

  //////////////////////
  /////// EVENTS ///////
  //////////////////////

  /**
   * @description
   * @param event 
   */
  clickList(event: Event){
    // cuando se añadan las traducciones, poner para que la clave de cada palabra a traducir se corresponda con el id
    const elemLi: any = event.target;
    this.removeAllActives();
    this.addActiveById(elemLi.id);
    this.secctionSelected = elemLi.id;
    switch (elemLi.id) {
      case this.secctions[0][0]:
        this.addLiteralsCard({
          header:'Language',
          text: 'Choose your language',
          title: 'Here you can choose your language by selecting in the dropdown what you want.',
          button: 'Select a language'});
        this.elementsDropDown = Object.values(Languages);
        break;
      case this.secctions[1][0]:
        this.addLiteralsCard({
          header: 'Theming',
          text: 'Choose your theming',
          title: 'Here you can choose your theming by selecting in the dropdown what you want.',
          button: 'Select a theming'})
        this.elementsDropDown = Object.values(Theming);
        break;
      case this.secctions[2][0]:
        this.addLiteralsCard({
          header: 'asdf',
          text: 'qwerqwer your theming',
          title: 'zxcvzxcv you can choose your theming by selecting in the dropdown what you want.',
          button: 'Select a Render Type'});
        this.elementsDropDown = Object.values(RenderType);
        break;
      default:
        break;
    }
  }

  /**
   * @description
   * @param elemSelected 
   */
  dropDownEvent(elemSelected: string) {
    this.dataSaved[this.secctionSelected] = elemSelected;
    this.addSuccessById(this.secctionSelected)
  }


  /////////////////////////////
  /////// DOM Functions ///////
  /////////////////////////////

  removeAllActives(){
    this.secctions.forEach(el => document.getElementById(el[0]).classList.remove('active'))
  }

  addActiveById(elemId: string){
    document.getElementById(elemId).classList.add('active');
  }

  addSuccessById(elemId: string){
    document.getElementById(elemId).classList.remove('list-group-item-primary')
    document.getElementById(elemId).classList.add('list-group-item-success')
  }

  ///////////////////////////////
  /////// Extra Functions ///////
  ///////////////////////////////

  addLiteralsCard(liter: ILiteralsCardConfig){
    this.literals.header = liter.header;
    this.literals.text = liter.text;
    this.literals.title = liter.title;
    this.literals.button = liter.button;
  }

}
