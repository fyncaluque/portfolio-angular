import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HardSkillComponent } from './components/hard-skill/hard-skill.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FooterComponent } from './components/footer/footer.component';
import { ParticlesComponent } from './components/particles/particles.component';
// Sections
import { HomeComponent } from './secctions/home/home.component';
import { AboutComponent } from './secctions/about/about.component';
import { SummaryComponent } from './secctions/summary/summary.component';
import { ContactComponent } from './secctions/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SummaryComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent,
    HardSkillComponent,
    EducationComponent,
    ExperienceComponent,
    ParticlesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
