import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ILiteralsCardConfig } from '../../configuration.interface';

@Component({
  selector: 'config-card',
  templateUrl: './config-card.component.html',
  styleUrls: ['./config-card.component.sass']
})
export class ConfigCardComponent implements OnInit {
  
  @Input() literals: ILiteralsCardConfig = {
    header: '',
    text: '',
    title: '',
    button: ''
  }
  @Input() elements: string[] = [];
  @Output() selectedElementEvent = new EventEmitter<string>()

  constructor() { }


  ngOnInit(): void {
  }

  selectDropDown(event: Event){
    const elm = (event.target as HTMLElement).innerText;
    this.literals.button = elm;
    this.selectedElementEvent.emit(elm)
  }

}
