import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeathSquareComponent } from './death-square/death-square.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TurretComponent } from './turret/turret.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ],
  exports:[
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ]
})
export class InternalDefensesModule { }
