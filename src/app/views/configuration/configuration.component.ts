import { Component, ElementRef, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/header/header.service';
import { Configuration } from 'src/app/shared/classes/Configuration';
import { HeaderSecctions } from 'src/app/shared/interfaces/header.interface';
import { ILiteralsCardConfig, Secctions } from '../../shared/interfaces/configuration.interface';
import { Languages, RenderType, Theming } from "../../shared/interfaces/configuration.interface"
const config = new Configuration();

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  literals: ILiteralsCardConfig = {
    button: '',
    header: '',
    text: '',
    title: ''
  }
  elementsDropDown: string[] = Object.values(Languages);
  secctions: string[][] = Object.entries(Secctions);
  secctionSelected: Secctions = Secctions.Languages;


  constructor(
    private router: Router, 
    private headerService: HeaderService
    ) { }

  ngOnInit(): void {
    this.addLiteralsCard({
      header: 'Language',
      text: 'Choose your language',
      title: 'Here you can choose your language by selecting in the dropdown what you want.',
      button: config.has(Secctions.Languages) ? config.get(Secctions.Languages) : 'Select a language'
    });
  }

  ngAfterViewInit(): void {
    this.initSecctionsState();

  }

  ngAfterViewChecked(){
    if(Object.keys(config.full()).filter(el=> Object.keys(Secctions).includes(el)).length === Object.keys(Secctions).length){
      const btn: HTMLButtonElement | any = document.getElementById('start-game-button');
      btn.disabled = false;
      btn.style.cursor = 'pointer';
      btn.classList.remove('disabled');
      btn.classList.add('active');
    }
  }

  /**
   * @description add class to three secctions elements
   */
  initSecctionsState(){
    document.getElementById(Secctions.Languages).classList.add('active');
    Object.keys(Secctions).forEach(el=> {
      if(config.get(Secctions[el])) this.addSuccessById(Secctions[el]);
    })
  }

  //////////////////////
  /////// EVENTS ///////
  //////////////////////

  /**
   * @description
   * @param event 
   */
  clickList(secctionId: Secctions){
    // cuando se añadan las traducciones, poner para que la clave de cada palabra a traducir se corresponda con el id
    this.removeAllActives();
    this.addActiveById(secctionId);
    this.secctionSelected = secctionId;
    switch (secctionId) {
      case Secctions.Languages:
        this.addLiteralsCard({
          header:'Language',
          text: 'Choose your language',
          title: 'Here you can choose your language by selecting in the dropdown what you want.',
          button: config.has(Secctions.Languages) ? config.get(Secctions.Languages) : 'Select a language'});
        this.elementsDropDown = Object.values(Languages);
        break;
      case Secctions.Theming:
        this.addLiteralsCard({
          header: 'Theming',
          text: 'Choose your theming',
          title: 'Here you can choose your theming by selecting in the dropdown what you want.',
          button: config.has(Secctions.Theming) ? config.get(Secctions.Theming) : 'Select a language'})
        this.elementsDropDown = Object.values(Theming);
        break;
      case Secctions.RenderType:
        this.addLiteralsCard({
          header: 'asdf',
          text: 'qwerqwer your theming',
          title: 'zxcvzxcv you can choose your theming by selecting in the dropdown what you want.',
          button: config.has(Secctions.RenderType) ? config.get(Secctions.RenderType) : 'Select a render type'});
        this.elementsDropDown = Object.values(RenderType);
        break;
      default:
        break;
    }
  }

  /**
   * @description event from config-card: it activates when  something is selected in the dropdown
   * @param elemSelected elemement selected in dropdown
   */
   eventGetElementDropDown(elemSelected: string) {
    config.set(this.secctionSelected, elemSelected);

    this.addSuccessById(this.secctionSelected);
    const posInSecction: number = Object.keys(Secctions).indexOf(this.secctionSelected);
    const nextPosition = Object.keys(Secctions)[posInSecction+1];
    if(nextPosition) this.clickList(Secctions[nextPosition]);
  }

  startGameClick(event: Event) {
     this.router.navigate(['/battle']);
     this.headerService.activateHeaderSecction(HeaderSecctions.battle)
  }


  /////////////////////////////
  /////// DOM Functions ///////
  /////////////////////////////

  removeAllActives(){
    Object.keys(Secctions).forEach(el => document.getElementById(el).classList.remove('active'))
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
