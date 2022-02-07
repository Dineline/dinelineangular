import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleDataComponent } from './google-data/google-data.component';
import { RestaurentGroupComponent } from './restaurent-group/restaurent-group.component';
import { BlastsComponent } from './blasts/blasts.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LocationGroupComponent } from './location-group/location-group.component';
import { DaniComponent } from './dani/dani.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleDataComponent,
    RestaurentGroupComponent,
    BlastsComponent,
    LocationGroupComponent,
    DaniComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule ,
    BrowserAnimationsModule,
    AppRoutingModule,
    Ng2GoogleChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
