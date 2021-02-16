import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './page/heroes/heroes.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
