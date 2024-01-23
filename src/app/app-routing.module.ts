import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonsPageComponent } from './pages/pokemons-page/pokemons-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ErrorNotFoundPageComponent } from './pages/error-not-found-page/error-not-found-page.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'pokemons', component: PokemonsPageComponent},
  {path: 'items', component: ItemsPageComponent},
  {path: 'about-us', component: AboutUsPageComponent},
  {path: 'error-404', component: ErrorNotFoundPageComponent},
  {path: '**', redirectTo: 'error-404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
