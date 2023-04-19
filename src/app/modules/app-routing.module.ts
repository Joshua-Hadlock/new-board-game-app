import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameSearchComponent } from '../components/game-search/game-search.component';
import { UserSelectionsComponent } from '../components/user-selections/user-selections.component';
import { GameDetailsComponent } from '../components/game-details/game-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full', data: {animation: 'gamesearch'}},
  { path: 'search', component: GameSearchComponent, data: {animation: 'gamesearch'} },
  { path: 'game-details', component: GameDetailsComponent, data: {animation: 'gamedetail'} },
  { path: 'owned', component: UserSelectionsComponent, data: {animation: 'gameOwn'} },
  { path: 'wishlist', component: UserSelectionsComponent, data: {animation: 'gamelist'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
