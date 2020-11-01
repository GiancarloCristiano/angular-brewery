import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryAboutComponent } from './brewery-about/brewery-about.component';
import { BreweryBeersComponent } from './brewery-beers/brewery-beers.component';
import { BreweryThanksComponent } from './brewery-thanks/brewery-thanks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'beers',
    pathMatch: 'full'  
  },
  {
    path: 'beers',
    component: BreweryBeersComponent
  },
  {
    path: 'about',
    component: BreweryAboutComponent
  },
  {
    path: 'thanks',
    component: BreweryThanksComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
