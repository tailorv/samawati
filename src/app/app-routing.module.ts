import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContuctComponent } from './components/contuct/contuct.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { EventsComponent } from './components/events/events.component';


const routes: Routes = [

  { path: '', component: LandingComponent,},
  { path: 'aboutus', component: AboutusComponent,},
  { path: 'landing', component: LandingComponent,},
  { path: 'contuct', component: ContuctComponent,},
  { path: 'activities', component: ActivitiesComponent,},
  { path: 'events', component: EventsComponent,},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
