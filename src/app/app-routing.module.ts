import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WheaterHomeComponent } from './modules/wheater/pages/wheater-home/wheater-home.component';

const routes: Routes = [
  {path:'',
  redirectTo:'wheater',
  pathMatch:'full',
  },
  {path:'wheater',
  component: WheaterHomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
