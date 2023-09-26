import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './secctions/about/about.component';
import { HomeComponent } from './secctions/home/home.component';
import { ContactComponent } from './secctions/contact/contact.component';
import { ProyectsComponent } from './secctions/proyects/proyects.component';
import { SummaryComponent } from './secctions/summary/summary.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProyectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
