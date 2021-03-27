import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { ConfigCardComponent } from './components/config-card/config-card.component';


@NgModule({
  declarations: [
    ConfigurationComponent,
    ConfigCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConfigurationModule { }
