import { OutsideComponent } from './landing-page/outside/outside.component';
import { CaveComponent } from './landing-page/cave/cave.component';
import { WaterComponent } from './landing-page/water/water.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LandingWithProjectsComponent } from './landing-with-projects/landing-with-projects.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'projects', component: LandingWithProjectsComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OutsideComponent,
    WaterComponent,
    CaveComponent,
    SideNavComponent,
    LandingWithProjectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
