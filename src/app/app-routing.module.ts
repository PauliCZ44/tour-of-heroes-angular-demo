import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent},
  { path: "dashboard", component: DashboardComponent },
  { path: 'detail/:id', component: HeroesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
