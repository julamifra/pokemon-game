import { EventEmitter, Injectable, Output } from '@angular/core';
import { Secctions } from 'src/app/shared/interfaces/configuration.interface';
import { HeaderSecctions } from 'src/app/shared/interfaces/header.interface';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Output() changeHeader: EventEmitter<HeaderSecctions> = new EventEmitter();

  constructor() {}

  activateHeaderSecction = (secct: HeaderSecctions) => this.changeHeader.emit(secct);
  
}
