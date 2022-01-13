import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { EventsComponent } from './components/events/events.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { ContuctComponent } from './components/contuct/contuct.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HowitworksComponent,
    ActivitiesComponent,
    AboutusComponent,
    EventsComponent,
    NavbarComponent,
    LandingComponent,
    ContuctComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
