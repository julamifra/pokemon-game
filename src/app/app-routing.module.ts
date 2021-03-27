import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './views/battle/battle.component';
import { ConfigurationComponent } from './views/configuration/configuration.component';

const routes: Routes = [
  { path: '', component: ConfigurationComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'battle', component: BattleComponent }
  // { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
