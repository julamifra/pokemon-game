import { Component, Input, OnInit } from '@angular/core';
import { ILiteralsCardConfig } from './config-card.interface';

@Component({
  selector: 'app-config-card',
  templateUrl: './config-card.component.html',
  styleUrls: ['./config-card.component.sass']
})
export class ConfigCardComponent implements OnInit {

  constructor() { }

  @Input() literals: ILiteralsCardConfig;

  ngOnInit(): void {
  }

}
